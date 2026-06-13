import { useState, useEffect, useCallback } from "react";
import projects from "../data/Projects.json";

// All asset URLs we need to preload
const HERO_IMAGE = "/images/kidzania/6.jpg";
const EXTRA_IMAGES = ["/images/fluttershy.jpg"];

// Font families to wait for
const FONT_CONFIGS = [
  { family: "NeueMontreal", weight: "500" },
  { family: "NeueMontreal", weight: "700" },
  { family: "KairosSans", weight: "700" },
];

function collectProjectAssets() {
  const images = [];
  const videos = [];
  const music = [];

  projects.forEach((project) => {
    if (project.images) {
      project.images.forEach((img) => {
        if (!images.includes(img)) images.push(img);
      });
    }
    if (project.videos) {
      project.videos.forEach((vid) => {
        if (!videos.includes(vid)) videos.push(vid);
      });
    }
    if (project.music && !music.includes(project.music)) {
      music.push(project.music);
    }
  });

  // Add hero + extra images
  [HERO_IMAGE, ...EXTRA_IMAGES].forEach((img) => {
    if (!images.includes(img)) images.push(img);
  });

  return { images, videos, music };
}

function preloadImage(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => {
      console.warn(`[preloader] Failed to load image: ${src}`);
      resolve(false);
    };
    img.src = src;
  });
}

function preloadVideo(src) {
  return new Promise((resolve) => {
    const video = document.createElement("video");
    // Use preload="auto" to encourage full download
    video.preload = "auto";

    let settled = false;
    const finish = (ok) => {
      if (!settled) {
        settled = true;
        resolve(ok);
      }
    };

    video.addEventListener("canplaythrough", () => finish(true), { once: true });
    video.addEventListener("loadeddata", () => finish(true), { once: true });
    video.addEventListener("error", () => {
      console.warn(`[preloader] Failed to load video: ${src}`);
      finish(false);
    });

    video.src = src;
    video.load();
  });
}

function preloadAudio(src) {
  return new Promise((resolve) => {
    const audio = new Audio();
    let settled = false;
    const finish = (ok) => {
      if (!settled) {
        settled = true;
        resolve(ok);
      }
    };

    audio.addEventListener("canplaythrough", () => finish(true), { once: true });
    audio.addEventListener("error", () => {
      console.warn(`[preloader] Failed to load audio: ${src}`);
      finish(false);
    });

    audio.src = src;
    audio.load();
  });
}

async function waitForFonts() {
  try {
    await document.fonts.ready;
  } catch {
    // fonts API not supported — proceed anyway
  }
}

function checkFontsLoaded() {
  try {
    return FONT_CONFIGS.every(({ family, weight }) =>
      document.fonts.check(`500 1em "${family}"`) ||
      document.fonts.check(`${weight} 1em "${family}"`)
    );
  } catch {
    return true;
  }
}

export default function useAssetPreloader() {
  const [progress, setProgress] = useState(0);
  const [total, setTotal] = useState(0);
  const [loaded, setLoaded] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [error, setError] = useState(null);

  const preloadAll = useCallback(async () => {
    try {
      const { images, videos, music } = collectProjectAssets();
      const totalCount =
        images.length + videos.length + music.length + 1; // +1 for fonts
      setTotal(totalCount);
      setLoaded(0);

      // 1. Fonts
      await waitForFonts();
      // Poll until fonts are actually painted/measured
      await new Promise((resolve) => {
        if (checkFontsLoaded()) {
          resolve();
          return;
        }
        // Retry a few times in case they load a moment later
        let attempts = 0;
        const interval = setInterval(() => {
          attempts++;
          if (checkFontsLoaded() || attempts > 10) {
            clearInterval(interval);
            resolve();
          }
        }, 200);
      });
      setLoaded((prev) => {
        const next = prev + 1;
        setProgress(Math.round((next / totalCount) * 100));
        return next;
      });

      // 2. Images (parallel, up to 6 at a time)
      const IMAGE_CONCURRENCY = 6;
      for (let i = 0; i < images.length; i += IMAGE_CONCURRENCY) {
        const batch = images.slice(i, i + IMAGE_CONCURRENCY);
        await Promise.all(
          batch.map(async (src) => {
            await preloadImage(src);
            setLoaded((prev) => {
              const next = prev + 1;
              setProgress(Math.round((next / totalCount) * 100));
              return next;
            });
          })
        );
      }

      // 3. Videos (parallel, up to 2 at a time — they're heavy)
      const VIDEO_CONCURRENCY = 2;
      for (let i = 0; i < videos.length; i += VIDEO_CONCURRENCY) {
        const batch = videos.slice(i, i + VIDEO_CONCURRENCY);
        await Promise.all(
          batch.map(async (src) => {
            await preloadVideo(src);
            setLoaded((prev) => {
              const next = prev + 1;
              setProgress(Math.round((next / totalCount) * 100));
              return next;
            });
          })
        );
      }

      // 4. Music (parallel)
      if (music.length > 0) {
        await Promise.all(
          music.map(async (src) => {
            await preloadAudio(src);
            setLoaded((prev) => {
              const next = prev + 1;
              setProgress(Math.round((next / totalCount) * 100));
              return next;
            });
          })
        );
      }

      setIsReady(true);
      setProgress(100);
    } catch (err) {
      console.error("[preloader] Preloading error:", err);
      setError(err.message);
      // Still let the user in even if preloading fails
      setIsReady(true);
      setProgress(100);
    }
  }, []);

  useEffect(() => {
    preloadAll();
  }, [preloadAll]);

  return { progress, total, loaded, isReady, error };
}

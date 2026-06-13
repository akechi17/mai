import React, { useState, useEffect, useRef } from "react";
import useAssetPreloader from "../hooks/useAssetPreloader";

const MIN_LOADING_MS = 800;

const LoadingScreen = ({ children }) => {
  const { progress, isReady } = useAssetPreloader();
  const [showContent, setShowContent] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const mountTime = useRef(Date.now());
  const overlayRef = useRef(null);

  // Remove the inline HTML loader once React mounts
  useEffect(() => {
    const loader = document.getElementById("initial-loader");
    if (loader) {
      loader.style.transition = "opacity 0.4s ease";
      loader.style.opacity = "0";
      setTimeout(() => {
        loader.parentNode?.removeChild(loader);
      }, 500);
    }
  }, []);

  useEffect(() => {
    if (isReady && !showContent) {
      const elapsed = Date.now() - mountTime.current;
      const remaining = Math.max(0, MIN_LOADING_MS - elapsed);

      const timer = setTimeout(() => {
        setFadeOut(true);
        // After the fade transition, fully show content
        setTimeout(() => {
          setShowContent(true);
          document.body.classList.remove("loading");
        }, 700);
      }, remaining);

      return () => clearTimeout(timer);
    }
  }, [isReady, showContent]);

  // Prevent body scroll while loading
  useEffect(() => {
    document.body.classList.add("loading");
    return () => {
      document.body.classList.remove("loading");
    };
  }, []);

  const progressBarWidth = `${Math.min(progress, 100)}%`;

  return (
    <>
      {/* The app content — always mounted, hidden behind overlay */}
      <div
        style={{
          opacity: showContent ? 1 : 0,
          transition: "opacity 0.7s ease",
        }}
      >
        {children}
      </div>

      {/* Loading overlay */}
      <div
        ref={overlayRef}
        className="loading-overlay"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: fadeOut ? 9998 : 99999,
          background: "var(--color-blanc, #f4f3ed)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          opacity: fadeOut ? 0 : 1,
          transition: "opacity 0.7s ease",
          pointerEvents: fadeOut ? "none" : "auto",
        }}
      >
        {/* Logo / title */}
        <div
          style={{
            font: '700 normal clamp(24px, 5vw, 64px) / 1.1 "NeueMontreal", sans-serif',
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "var(--color-noir, #171717)",
            marginBottom: "2rem",
            textAlign: "center",
          }}
        >
          Rafie
          <span style={{ display: "block", fontSize: "0.6em" }}>&</span>
          Maira
        </div>

        {/* Progress bar container */}
        <div
          style={{
            width: "clamp(160px, 30vw, 320px)",
            height: "2px",
            background: "rgba(23,23,23,0.15)",
            borderRadius: "1px",
            overflow: "hidden",
            marginBottom: "2rem",
          }}
        >
          <div
            className="loading-progress-bar"
            style={{
              width: progressBarWidth,
              height: "100%",
              background: "var(--color-noir, #171717)",
              borderRadius: "1px",
              transition: "width 0.3s ease",
            }}
          />
        </div>

        {/* Percentage text */}
        <span
          style={{
            font: '500 normal clamp(14px, 1vw, 18px) / 1 "NeueMontreal", sans-serif',
            color: "var(--color-noir, #171717)",
            opacity: 0.7,
          }}
        >
          {progress < 100 ? `${progress}%` : "Loading..."}
        </span>
      </div>
    </>
  );
};

export default LoadingScreen;

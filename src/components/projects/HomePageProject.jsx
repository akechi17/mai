import React, { useEffect, useRef, useState } from "react";
import projects from "../../data/Projects.json";
import { useNavigate, useLocation } from "react-router-dom";
import gsap from "gsap";
import { useLenis } from "lenis/react";
import ImageMedia from "./ImageMedia";
import VideoMedia from "./VideoMedia";
import useSound from "use-sound";

const HomePageProject = ({
  handleError,
  sectionRef,
  tabIndex,
  setProjectsVisible,
}) => {
  const [isTitleButtonHovered, setIsTitleButtonHovered] = useState(false);
  const [isCloseButtonHovered, setIsCloseButtonHovered] = useState(false);
  const [isNextButtonHovered, setIsNextButtonHovered] = useState(false);
  const [currentSound, setCurrentSound] = useState(null);
  const [zIndex, setZIndex] = useState(2); // Initial zIndex value
  const [isMobile, setIsMobile] = useState(window.innerWidth >= 900);
  const navigate = useNavigate();
  const location = useLocation();
  const yToRefs = useRef([]);
  const ficheRefs = useRef([]);
  const lenis = useLenis();

  const startAnimation = (horizontal = false) => {
    yToRefs.current.forEach((ref) => {
      if (ref) {
        // Desktop: scroll by a fixed pixel amount to show one full set.
        // Mobile: scroll by 50% of the content width (content is duplicated).
        gsap.to(ref, {
          ...(horizontal
            ? { xPercent: -50 }
            : { y: -2481 }),
          keyframes: [
            { duration: 2, ease: "power1.inOut" },
            { duration: 30, ease: "linear" },
            { duration: 2, ease: "power1.inOut" },
          ],
          repeat: -1,
        });
      }
    });
  };

  const stopAnimation = () => {
    yToRefs.current.forEach((ref) => {
      if (ref) {
        gsap.killTweensOf(ref);
        gsap.set(ref, { x: 0, y: 0 }); // Reset both translate axes
      }
    });
  };

  useEffect(() => {
    const handleResize = () => {
      const isNowDesktop = window.innerWidth >= 900;
      if (isNowDesktop && !isMobile) {
        // switched from mobile to desktop → vertical
        stopAnimation();
        startAnimation(false);
      } else if (!isNowDesktop && isMobile) {
        // switched from desktop to mobile → horizontal
        stopAnimation();
        startAnimation(true);
      }
      setIsMobile(isNowDesktop);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check the initial size

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) {
      startAnimation(false); // desktop: vertical
    } else {
      startAnimation(true); // mobile: horizontal
    }

    return () => {
      stopAnimation();
    };
  }, [isMobile]);

  const handleTitleButtonHover = () => {
    setIsTitleButtonHovered(true);
    setTimeout(() => {
      setIsTitleButtonHovered(false);
    }, 200);
  };

  const handleCloseButtonHover = () => {
    setIsCloseButtonHovered(true);
    setTimeout(() => {
      setIsCloseButtonHovered(false);
    }, 200);
  };

  const handleNextButtonHover = () => {
    setIsNextButtonHovered(true);
    setTimeout(() => {
      setIsNextButtonHovered(false);
    }, 200);
  };

  const handleCloseClick = () => {
    if (sectionRef.current) {
      gsap.to(sectionRef.current, {
        duration: 0.5,
        maskImage:
          "linear-gradient(transparent 100%,rgb(0, 0, 0) 125%,rgb(0, 0, 0) 225%,transparent 250%,transparent 250%)",
        onComplete: () => {
          sectionRef.current.classList.remove("on");
          navigate("/");
          lenis.start();
        },
      });
      setProjectsVisible(true);
    }
  };

  const handleNextClick = (index) => {
    const nextIndex = (index + 1) % projects.length; // Calculate the index of the next project
    const nextProject = projects[nextIndex]; // Get the next project object

    navigate(`/${nextProject.name.replace(/\s+/g, "-")}`, { replace: true });
    if (ficheRefs.current[nextIndex]) {
      if (zIndex % 2 === 0) {
        ficheRefs.current[nextIndex].classList.toggle("neg2");
      }
      gsap.to(ficheRefs.current[nextIndex], {
        duration: 1,
        zIndex: zIndex, // Set zIndex value
        maskImage:
          "linear-gradient(90deg, transparent -25%, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%, transparent 125%, transparent 125%)",
        onComplete: () => {
          setZIndex((prevZIndex) => prevZIndex + 1);
          lenis.stop();
        },
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className='homepage-fiche'
      data-v-28f4920b
      data-v-afd506cc
      style={{
        maskImage:
          "linear-gradient(transparent 100%,rgb(0, 0, 0) 125%,rgb(0, 0, 0) 225%,transparent 250%,transparent 250%)",
      }}
    >
      {projects?.map((project, index) => {
        const ficheStyle =
          location.pathname === `/${project.name.replace(/\s+/g, "-")}`
            ? {
                maskImage:
                  "linear-gradient(transparent -25%,rgb(0, 0, 0) 0%,rgb(0, 0, 0) 100%,transparent 125%,transparent 125%)",
              }
            : {};

        const [play, { stop }] = useSound(project.music);

        useEffect(() => {
          if (location.pathname === `/${project.name.replace(/\s+/g, "-")}`) {
            // Stop any currently playing sound
            if (currentSound) {
              currentSound.stop();
            }
            play();
            setCurrentSound({ play, stop });
          }
        }, [location.pathname, play, project.name]);

        return (
          <div
            key={project.name}
            className={`fiche fiche${index}`}
            data-url={project.name}
            data-v-afd506cc
            style={ficheStyle}
            ref={(el) => (ficheRefs.current[index] = el)}
          >
            <header
              className='app-header t-big-text'
              data-v-afd506cc
              data-v-41ec62bd
            >
              <button
                aria-label='Rafie & Maira'
                className={`mesure ${isTitleButtonHovered ? "on" : ""}`}
                data-v-41ec62bd
                data-v-39d6bdbe
                tabIndex={tabIndex}
                onClick={handleCloseClick}
                onMouseEnter={handleTitleButtonHover}
              >
                <span data-v-39d6bdbe>
                  <span className='translate' data-v-39d6bdbe>
                    <span data-v-39d6bdbe>Rafie & Maira</span>
                    <span aria-hidden='true' data-v-39d6bdbe>
                      Rafie & Maira
                    </span>
                  </span>
                </span>
              </button>
              <button
                aria-label='Close'
                className={`${isCloseButtonHovered ? "on" : ""}`}
                data-v-41ec62bd
                data-v-39d6bdbe
                tabIndex={tabIndex}
                onClick={handleCloseClick}
                onMouseEnter={handleCloseButtonHover}
              >
                <span data-v-39d6bdbe>
                  <span className='translate' data-v-39d6bdbe>
                    <span data-v-39d6bdbe>Close</span>
                    <span aria-hidden='true' data-v-39d6bdbe>
                      Close
                    </span>
                  </span>
                </span>
              </button>
            </header>
            <div
              data-lenis-prevent-touch
              className='left'
              data-v-afd506cc
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
              }}
            >
              <div
                ref={(el) => (yToRefs.current[index] = el)}
                className='yTo'
                data-v-afd506cc
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px, 0px)",
                }}
              >
                {(() => {
                  const items = [];
                  const imgs = project.images || [];
                  const vids = project.videos || [];

                  // first image (if any) → first video (if any) → remaining images → remaining videos
                  if (imgs.length) items.push({ type: 'image', src: imgs[0] });
                  if (vids.length) items.push({ type: 'video', src: vids[0] });
                  for (let i = 1; i < imgs.length; i++) items.push({ type: 'image', src: imgs[i] });
                  for (let i = 1; i < vids.length; i++) items.push({ type: 'video', src: vids[i] });

                  // duplicate once so the scroll loop is seamless
                  const loop = [...items, ...items];

                  return loop.map((media, mi) =>
                    media.type === 'image'
                      ? <ImageMedia key={`img-${mi}`} handleError={handleError} image={media.src} />
                      : <VideoMedia key={`vid-${mi}`} video={media.src} />
                  );
                })()}
              </div>
            </div>
            <div className='right' data-v-afd506cc>
              <div className='top' data-v-afd506cc>
                <h2 data-v-afd506cc>{project.name}</h2>
                <div className='flex' data-v-afd506cc>
                  <div className='col' data-v-afd506cc>
                    <h3 data-v-afd506cc></h3>
                    <p data-v-afd506cc>{project.info}</p>
                  </div>
                  <div className='col' data-v-afd506cc>
                      <h3 data-v-afd506cc></h3>
                      <p data-v-afd506cc>{project.description}</p>
                    {/* <div data-v-afd506cc>
                      <h3 data-v-afd506cc></h3>
                      <p data-v-afd506cc>{project?.message}</p>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default HomePageProject;

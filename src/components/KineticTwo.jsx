import React, { useEffect } from "react";
import gsap from "gsap";

const KineticTwo = ({ tabIndex }) => {
  useEffect(() => {
    // All shapes spawn from center (yPercent: 0) and move outward.
    // Up-group: 0 → -4300 (move upward), repeated forever.
    // Down-group: 0 → 4300 (move downward), repeated forever.
    // The stagger offset (0.8s) creates a continuous wave.
    // On each repeat, GSAP restores to 0 (center), so shapes always
    // appear to originate from the center of the area.

    const upShapes = document.querySelectorAll(".shapeup .shape");
    upShapes.forEach((shape, i) => {
      gsap.fromTo(
        shape,
        { yPercent: 0 },
        {
          yPercent: -4300,
          duration: 4,
          ease: "power2.in",
          repeat: -1,
          delay: i * 0.8,
        }
      );
    });

    const downShapes = document.querySelectorAll(".shapedown .shape");
    downShapes.forEach((shape, i) => {
      gsap.fromTo(
        shape,
        { yPercent: 0 },
        {
          yPercent: 4300,
          duration: 4,
          ease: "power2.in",
          repeat: -1,
          delay: i * 0.8,
        }
      );
    });

    return () => {
      upShapes.forEach((shape) => gsap.killTweensOf(shape));
      downShapes.forEach((shape) => gsap.killTweensOf(shape));
    };
  }, []);

  return (
    <div className='cell' data-v-28f4920b=''>
      <button
        aria-label='Open kinetic layout'
        className='homepage-kinetic kinetic'
        data-v-28f4920b=''
        data-v-c72531ab=''
        tabIndex={tabIndex}
        style={{
          zIndex: "1",
          translate: "none",
          rotate: "none",
          scale: "none",
          transform: "translate(0px, 0px)",
        }}
      >
        <div
          className='group'
          data-v-c72531ab=''
          style={{
            translate: "none",
            rotate: "none",
            scale: "none",
            transform: "translate(0px, 0px)",
          }}
        >
          <div className='shapeparent shapeup' data-v-c72531ab=''>
            <div
              className='shape'
              data-v-c72531ab=''
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform:
                  "translate(0%, -295.146%) translate3d(0px, 0px, 0px)",
              }}
            ></div>
            <div
              className='shape'
              data-v-c72531ab=''
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0%, -39.504%) translate3d(0px, 0px, 0px)",
              }}
            ></div>
            <div
              className='shape'
              data-v-c72531ab=''
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0%, -0.0036%) translate3d(0px, 0px, 0px)",
              }}
            ></div>
            <div
              className='shape'
              data-v-c72531ab=''
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform:
                  "translate(0%, -2280.45%) translate3d(0px, 0px, 0px)",
              }}
            ></div>
            <div
              className='shape'
              data-v-c72531ab=''
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform:
                  "translate(0%, -973.328%) translate3d(0px, 0px, 0px)",
              }}
            ></div>
          </div>
          <div className='shapeparent shapedown' data-v-c72531ab=''>
            <div
              className='shape'
              data-v-c72531ab=''
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0%, 295.146%) translate3d(0px, 0px, 0px)",
              }}
            ></div>
            <div
              className='shape'
              data-v-c72531ab=''
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0%, 39.504%) translate3d(0px, 0px, 0px)",
              }}
            ></div>
            <div
              className='shape'
              data-v-c72531ab=''
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0%, 0.0036%) translate3d(0px, 0px, 0px)",
              }}
            ></div>
            <div
              className='shape'
              data-v-c72531ab=''
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0%, 2280.45%) translate3d(0px, 0px, 0px)",
              }}
            ></div>
            <div
              className='shape'
              data-v-c72531ab=''
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0%, 973.328%) translate3d(0px, 0px, 0px)",
              }}
            ></div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default KineticTwo;

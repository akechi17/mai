import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const KineticOne = ({tabIndex}) => {
  const shapeRefs = useRef([]);

  // Function to add a reference to each shape
  const addToRefs = (el) => {
    if (el && !shapeRefs.current.includes(el)) {
      shapeRefs.current.push(el);
    }
  };

  useEffect(() => {
    const shapes = shapeRefs.current;

    // Each shape independently: scale 0 → 1 → SNAP back to 0 → 1 → ...
    // The stagger (0.5s) creates a cascading wave.
    // repeat: -1 makes GSAP restore scale(0) and re-animate each cycle,
    // so shapes "start from small" immediately after reaching max.
    shapes.forEach((shape, i) => {
      gsap.fromTo(
        shape,
        { scale: 0 },
        {
          scale: 1,
          duration: 2,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true,
          delay: i * 0.5,
        }
      );
    });

    return () => {
      shapes.forEach((shape) => gsap.killTweensOf(shape));
    };
  }, []);

  return (
    <div className='cell'>
      <button
        aria-label='Open kinetic layout'
        className='homepage-kinetic homepage-kinetic-1 kinetic'
        tabIndex={tabIndex}
      >
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            ref={addToRefs}
            data-v-5edce65c=''
            className='shape'
            style={{
              zIndex: index + 1,
            }}
          ></div>
        ))}
      </button>
    </div>
  );
};

export default KineticOne;

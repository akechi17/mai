import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const KineticOne = ({ tabIndex }) => {
  const shapeRefs = useRef([
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ]);

  const zIndexStart = 8; // Initial highest zIndex value
  const duration = 2;
  const initialScales = [
    0.9985, 0.9693, 0.8662, 0.6423, 0.3132, 0.1111, 0.0225, 0.0006,
  ];

  useEffect(() => {
    const animateShape = (shape, initialScale, index) => {
      gsap.set(shape, { scale: initialScale, zIndex: index + 1 });

      const tl = gsap.timeline({
        repeat: -1,
        onRepeat: () => {
          // Increment zIndex for each shape
          gsap.set(shape, {
            scale: 0,
            zIndex: zIndexStart + index,
          });
        },
      });

      tl.to(shape, {
        scale: 1,
        duration: duration,
        ease: "none",
        onComplete: () => {
          gsap.set(shape, { scale: 0 });
        },
      });
    };

    shapeRefs.current.forEach((shapeRef, index) => {
      if (shapeRef.current) {
        animateShape(shapeRef.current, initialScales[index], index);
      }
    });
  }, []);

  return (
    <div className='cell'>
      <button
        aria-label='Open kinetic layout'
        className='homepage-kinetic homepage-kinetic-1 kinetic'
        tabIndex={tabIndex}
      >
        {shapeRefs.current.map((shapeRef, index) => (
          <div
            key={index}
            ref={shapeRef}
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

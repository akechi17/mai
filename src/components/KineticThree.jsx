import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const KineticThree = ({ tabIndex }) => {
  const shapesRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(shapesRef.current.children, {
      rotation: 360,
      duration: 7,
      ease: "none",
      stagger: 0,
    });
  }, []);

  return (
    <div className='cell' data-v-28f4920b=''>
      <button
        aria-label='Open kinetic layout'
        className='homepage-kinetic kinetic'
        data-v-28f4920b=''
        data-v-e05c7460=''
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
          ref={shapesRef}
          data-v-e05c7460=''
          style={{
            translate: "none",
            rotate: "none",
            scale: "none",
            transform: "translate3d(0px, 0px, 0px) rotate(0deg)",
          }}
        >
          <div
            className='shape'
            data-v-e05c7460=''
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              transform: "scale(0.85, 0.85)",
            }}
          >
            <svg
              width='243'
              height='211'
              viewBox='0 0 243 211'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              data-v-e05c7460=''
            >
              <path
                d='M242.791 105.876L182.176 210.864L60.9462 210.864L0.331309 105.876L60.9462 0.88771L182.176 0.887716L242.791 105.876Z'
                data-v-e05c7460=''
              ></path>
            </svg>
          </div>
          <div
            className='shape'
            data-v-e05c7460=''
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              transform: "scale(0.65, 0.65)",
            }}
          >
            <svg
              width='243'
              height='211'
              viewBox='0 0 243 211'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              data-v-e05c7460=''
            >
              <path
                d='M242.791 105.876L182.176 210.864L60.9462 210.864L0.331309 105.876L60.9462 0.88771L182.176 0.887716L242.791 105.876Z'
                data-v-e05c7460=''
              ></path>
            </svg>
          </div>
          <div
            className='shape'
            data-v-e05c7460=''
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              transform: "scale(0.45, 0.45)",
            }}
          >
            <svg
              width='243'
              height='211'
              viewBox='0 0 243 211'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              data-v-e05c7460=''
            >
              <path
                d='M242.791 105.876L182.176 210.864L60.9462 210.864L0.331309 105.876L60.9462 0.88771L182.176 0.887716L242.791 105.876Z'
                data-v-e05c7460=''
              ></path>
            </svg>
          </div>
          <div
            className='shape'
            data-v-e05c7460=''
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              transform: "scale(0.25, 0.25)",
            }}
          >
            <svg
              width='243'
              height='211'
              viewBox='0 0 243 211'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              data-v-e05c7460=''
            >
              <path
                d='M242.791 105.876L182.176 210.864L60.9462 210.864L0.331309 105.876L60.9462 0.88771L182.176 0.887716L242.791 105.876Z'
                data-v-e05c7460=''
              ></path>
            </svg>
          </div>
        </div>
      </button>
    </div>
  );
};

export default KineticThree;

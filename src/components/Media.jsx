import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Media = ({ handleError, image, isNotGrey }) => {
  const stagRef = useRef(null);
  const hoverRef = useRef(null);

  useEffect(() => {
    const mediaChild = stagRef.current.closest(".media-child");

    const handleMouseEnter = () => {
      const [firstImage, secondImage] =
        stagRef.current.querySelectorAll(".img");

      // Create a timeline for the first image animation
      const firstImageTimeline = gsap.timeline();
      firstImageTimeline
        .to(firstImage, {
          scale: 0.7,
          duration: 0.5,
          ease: "power2.inOut",
        })
        .to(firstImage, {
          scale: 1,
          duration: 0.5,
          ease: "power2.inOut",
        });

      // Create a timeline for the second image animation
      const secondImageTimeline = gsap.timeline();
      secondImageTimeline
        .to(secondImage, {
          scale: 0.4,
          duration: 0.5,
          ease: "power2.inOut",
        })
        .to(secondImage, {
          scale: 1,
          duration: 0.5,
          ease: "power2.inOut",
        });

      // Set opacity and visibility of the hover element
      hoverRef.current.style.opacity = 1;
      hoverRef.current.style.visibility = "inherit";

      // When both animations are complete, reset the hover element's opacity and visibility
      firstImageTimeline.eventCallback("onComplete", () => {
        hoverRef.current.style.opacity = 0;
        hoverRef.current.style.visibility = "hidden";
      });
      secondImageTimeline.eventCallback("onComplete", () => {
        hoverRef.current.style.opacity = 0;
        hoverRef.current.style.visibility = "hidden";
      });
    };

    mediaChild.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      mediaChild.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <div className='media' data-v-28f4920b=''>
      <div
        className='media-child'
        data-v-28f4920b=''
        style={{
          translate: "none",
          rotate: "none",
          scale: "none",
          transform: "translate(0px, 0px)",
        }}
      >
        <img
          src={image}
          onError={handleError}
          alt=''
          data-nuxt-img=''
          srcSet={`${image} 1x, ${image} 2x`}
          className={isNotGrey ? "not-grey" : "grey"}
          data-v-28f4920b=''
          style={{
            translate: "none",
            rotate: "none",
            scale: "none",
            transform: "translate(0px, 0px)",
          }}
        />
        <div
          className='hover'
          ref={hoverRef}
          data-v-28f4920b=''
          style={{ opacity: "0", visibility: "hidden" }}
        >
          <img
            src={image}
            onError={handleError}
            alt=''
            data-nuxt-img=''
            srcSet={`${image} 1x, ${image} 2x`}
            className='fond'
            data-v-28f4920b=''
          />
          <div className='stag' ref={stagRef} data-v-28f4920b=''>
            <img
              src={image}
              onError={handleError}
              alt=''
              data-nuxt-img=''
              srcSet={`${image} 1x,${image} 2x`}
              className='img'
              data-v-28f4920b=''
              style={{
                translate: "none",
                rotate: "none",
                scale: 0.8,
                opacity: "1",
                visibility: "inherit",
                transform: "translate(0px, 0px)",
              }}
            />
            <img
              src={image}
              onError={handleError}
              alt=''
              data-nuxt-img=''
              srcSet={`${image} 1x,${image} 2x`}
              className='img'
              data-v-28f4920b=''
              style={{
                translate: "none",
                rotate: "none",
                scale: 0.6,
                opacity: "1",
                visibility: "inherit",
                transform: "translate(0px, 0px)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;

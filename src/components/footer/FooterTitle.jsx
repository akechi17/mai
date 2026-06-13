import React, { useRef, useEffect } from "react";
import { useLenis } from "lenis/react";
import gsap from "gsap";

const FooterTitle = () => {
  // const titleRef = useRef(null);

  // useLenis(({ scroll }) => {
  //   const wordsAbove = titleRef.current.querySelectorAll(".word-above");
  //   const wordsUnder = titleRef.current.querySelectorAll(".word-under");

  //   wordsAbove.forEach((word, index) => {
  //     const { top, height } = word.getBoundingClientRect();
  //     const scrollPercentage = Math.max(
  //       0,
  //       Math.min(100, ((scroll - top) / height) * 100)
  //     );
  //     if (scrollPercentage >= 7.5) {
  //       const abovePercentage = scrollPercentage;
  //       gsap.to(word, {
  //         duration: 0.5,
  //         y: `${abovePercentage}%`,
  //         ease: "power2.out",
  //       });
  //     }
  //   });

  //   wordsUnder.forEach((word, index) => {
  //     const { top, height } = word.getBoundingClientRect();
  //     const scrollPercentage = Math.max(
  //       0,
  //       Math.min(100, ((scroll - top) / height) * 100)
  //     );
  //     if (scrollPercentage >= 7.5) {
  //       const underPercentage = -100 + scrollPercentage;
  //       gsap.to(word, {
  //         duration: 0.5,
  //         y: `${underPercentage}%`,
  //         ease: "power2.out",
  //       });
  //     }
  //   });
  // });

  return (
    <p
      // ref={titleRef}
      className='t-h2 footer-para'
      aria-label='Over 4 years of experience in the website development industry crafting websites and design work for clients of all sizes.'
      translate='no'
      data-v-2819df48=''
    >
      <span className='word word-1' data-v-2819df48=''>
        <span className='word-above' data-v-2819df48=''>
          Thanks for spending times
        </span>
        <span className='word-under' data-v-2819df48=''>
          Over 4 years of experience
        </span>
      </span>
      <br className='word-1' data-v-2819df48='' />
      <span className='word word-1' data-v-2819df48=''>
        <span className='word-above' data-v-2819df48=''>
          with me, mairaa!
        </span>
        <span
          className='word-under'
          data-v-2819df48=''
          // style={{
          //   translate: "none",
          //   rotate: "none",
          //   scale: "none",
          //   transform: "translate(0px, -99.5361%)",
          // }}
        >
          in the website development
        </span>
      </span>
      <br className='word-1' data-v-2819df48='' />
      <span className='word word-1' data-v-2819df48=''>
        <span className='word-above' data-v-2819df48=''>
          jangan bosen jalan jalan
        </span>
        <span
          className='word-under'
          data-v-2819df48=''
          // style={{
          //   translate: "none",
          //   rotate: "none",
          //   scale: "none",
          //   transform: "translate(0px, -99.5361%)",
          // }}
        >
          industry crafting websites
        </span>
      </span>
      <br className='word-1' data-v-2819df48='' />
      <span className='word word-1' data-v-2819df48=''>
        <span className='word-above' data-v-2819df48=''>
          sama aku yaa hahahaha
        </span>
        <span className='word-under' data-v-2819df48=''>
          and design work for clients.
        </span>
      </span>
      <br className='word-1' data-v-2819df48='' />
      <span className='word word-2' data-v-2819df48=''>
        <span className='word-above' data-v-2819df48=''>
          Thanks for spending
        </span>
      </span>
      <br className='word-2' data-v-2819df48='' />
      <span className='word word-2' data-v-2819df48=''>
        <span className='word-above' data-v-2819df48=''>
          times with me, mairaa!
        </span>
      </span>
      <br className='word-2' data-v-2819df48='' />
      <span className='word word-2' data-v-2819df48=''>
        <span className='word-above' data-v-2819df48=''>
          Kita harus lebih
        </span>
      </span>
      <br className='word-2' data-v-2819df48='' />
      <span className='word word-2' data-v-2819df48=''>
        <span className='word-above' data-v-2819df48=''>
          sering jalan jalan
        </span>
      </span>
      <br className='word-2' data-v-2819df48='' />
      <span className='word word-2' data-v-2819df48=''>
        <span className='word-above' data-v-2819df48=''>
          lagi ahahaha
        </span>
      </span>
    </p>
  );
};

export default FooterTitle;

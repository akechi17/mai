import React, { useState } from "react";
import HomePageTitle from "./HomePageTitle";

const Hero = ({
  isTitleAnimationComplete,
  handleTitleAnimationComplete,
  tabIndex,
}) => {
  const [isScrollButtonHovered, setIsScrollButtonHovered] = useState(false);

  const handleScrollButtonHover = () => {
    setIsScrollButtonHovered(true);
    setTimeout(() => {
      setIsScrollButtonHovered(false);
    }, 200);
  };
  return (
    <div className='homepage-hero grid-padding' data-v-e747f53d=''>
      <div data-v-e747f53d=''>
        <HomePageTitle onAnimationComplete={handleTitleAnimationComplete} />
        <section
          className='homepage-kinetic laststag'
          data-v-e747f53d=''
          data-v-571c3632=''
          style={{
            opacity: 1,
            visibility: isTitleAnimationComplete ? "visible" : "hidden",
          }}
        >
          <img className='shape' src='/images/kidzania/6.jpg' alt='' width="100%" />
        </section>
        <div
          className='grid laststag'
          data-v-e747f53d=''
          style={{
            opacity: 1,
            visibility: isTitleAnimationComplete ? "visible" : "hidden",
          }}
        >
          <p className='col col1' data-v-e747f53d=''>
            This website is made to collect moments that Rafie and Maira 
            spent together!
          </p>
          <button
            aria-label='Scroll'
            className={`scroll t-big-text ${isScrollButtonHovered ? "on" : ""}`}
            data-v-e747f53d=''
            data-v-39d6bdbe=''
            tabIndex={tabIndex}
            onMouseEnter={handleScrollButtonHover}
          >
            <span data-v-39d6bdbe=''>
              <span className='translate' data-v-39d6bdbe=''>
                <span data-v-39d6bdbe=''>Scroll</span>
                <span aria-hidden='true' data-v-39d6bdbe=''>
                  Scroll
                </span>
              </span>
            </span>
          </button>
          <div className='col2' data-v-e747f53d=''>
            <ul className='col col2bis' data-v-e747f53d=''>
              <li data-v-e747f53d=''>The galeries</li>
              <li data-v-e747f53d=''>are grouped</li>
              <li data-v-e747f53d=''>by the places</li>
              <li data-v-e747f53d=''>we visited.</li>
            </ul>
            <ul className='col col3' data-v-e747f53d=''>
              <li data-v-e747f53d=''>Aeon Tanjung Barat</li>
              <li data-v-e747f53d=''>Kidzania</li>
              <li data-v-e747f53d=''>And more places soon!</li>
              <li style={{ height: "50px" }} data-v-e747f53d=''></li>
            </ul>
          </div>
          {/* <ul className='col col4' data-v-e747f53d=''>
            <li data-v-e747f53d=''>4 FWA</li>
            <li data-v-e747f53d=''>7 Awwwards</li>
            <li data-v-e747f53d=''>2 CSSDA</li>
            <li data-v-e747f53d=''>8 Siteinspire</li>
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default Hero
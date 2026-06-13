import React, { useEffect, useRef, useState } from "react";
import { Footer, Header, Hero, HomePageProject, Projects } from "../components";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { useLenis } from "lenis/react";

const Home = ({ projectName }) => {
  const sectionRef = useRef(null);
  const location = useLocation();
  const lenis = useLenis();
  const [tabIndex, setTabIndex] = useState(true);
  const [projectsVisible, setProjectsVisible] = useState(true);
  const [isTitleAnimationComplete, setIsTitleAnimationComplete] =
    useState(false);

  useEffect(() => {
    if (
      lenis &&
      projectName &&
      location.pathname === `/${projectName.replace(/\s+/g, "-")}`
    ) {
      lenis.stop();
      setTabIndex(false);
      gsap.to(sectionRef.current, {
        duration: 0.7,
        zIndex: 1,
        maskImage:
          "linear-gradient(transparent -25%,rgb(0, 0, 0) 0%,rgb(0, 0, 0) 100%,transparent 125%,transparent 125%)",
      });
      sectionRef.current.classList.add("on");
      setProjectsVisible(false);
    } else {
      setTabIndex(true);
    }
  }, [lenis, location.pathname, projectName]);

  const handleTitleAnimationComplete = () => {
    setIsTitleAnimationComplete(true);
  };

  const handleError = (event) => {
    event.target.setAttribute("data-error", 1);
  };

  return (
    <div id='__nuxt'>
      <main>
        {isTitleAnimationComplete && <Header />}
        <div id='main'>
          <section className='homepage'>
            <Hero
              tabIndex={tabIndex ? "0" : "-1"}
              isTitleAnimationComplete={isTitleAnimationComplete}
              handleTitleAnimationComplete={handleTitleAnimationComplete}
            />
            <div className='homepage-grid grid-padding' data-v-28f4920b=''>
              <div
                className='volet'
                aria-hidden='true'
                data-v-28f4920b=''
              ></div>
              <HomePageProject
                tabIndex={tabIndex ? "-1" : "0"}
                handleError={handleError}
                sectionRef={sectionRef}
                setProjectsVisible={setProjectsVisible}
              />
              <Projects
                tabIndex={tabIndex}
                handleError={handleError}
                projectsVisible={projectsVisible}
                setProjectsVisible={setProjectsVisible}
              />
            </div>
          </section>
          <Footer tabIndex={tabIndex ? "0" : "-1"} />
        </div>
      </main>
    </div>
  );
};

export default Home;

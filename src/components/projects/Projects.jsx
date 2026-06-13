import React from "react";
import { Link } from "react-router-dom";
import KineticOne from "../KineticOne";
import Media from "../Media";
import KineticTwo from "../KineticTwo";
import KineticThree from "../KineticThree";

const Projects = ({
  tabIndex,
  handleError,
  projectsVisible,
  setProjectsVisible,
}) => {
  return (
    <div className="grid-spe" data-v-28f4920b="">
      <div className="ligne ligne1" data-v-28f4920b="">
        {projectsVisible && <KineticOne tabIndex={tabIndex ? "0" : "-1"} />}

        <div className="cell" data-v-28f4920b="">
          <h2 data-v-28f4920b="">Our Gallery</h2>
        </div>
      </div>
      <div className="ligne ligne2" data-v-28f4920b="">
        <div className="cell" data-v-28f4920b="">
          <Link
            to="/aeon-tanjung-barat"
            className="innerMedia"
            data-v-28f4920b=""
            tabIndex={tabIndex ? "0" : "-1"}
            style={{ pointerEvents: "initial" }}
          >
            {projectsVisible && (
              <>
                <span className="index" data-v-28f4920b="">
                  01
                </span>
                <h3 className="t-h3" data-v-28f4920b="">
                  Aeon Tanjung Barat
                </h3>
                <Media handleError={handleError} image="/images/aeon/3.jpg" />
              </>
            )}
          </Link>
        </div>
        {projectsVisible && <KineticTwo tabIndex={tabIndex ? "0" : "-1"} />}
      </div>
      <div className="ligne ligne3" data-v-28f4920b="">
        <div className="cell" data-v-28f4920b="">
          <Link
            to="/kidzania"
            className="innerMedia"
            data-v-28f4920b=""
            tabIndex={tabIndex ? "0" : "-1"}
            style={{ pointerEvents: "initial" }}
          >
            {projectsVisible && (
              <>
                <span className="index" data-v-28f4920b="">
                  02
                </span>
                <h3 className="t-h3" data-v-28f4920b="">
                  Kidzania
                </h3>
                <Media
                  handleError={handleError}
                  image="/images/kidzania/1.jpg"
                />
              </>
            )}
          </Link>
        </div>
      </div>
      <div className="ligne ligne4" data-v-28f4920b="">
        <div className="cell" data-v-28f4920b="">
          <Link
            to="/"
            className="innerMedia"
            data-v-28f4920b=""
            tabIndex={tabIndex ? "0" : "-1"}
            style={{ pointerEvents: "initial" }}
          >
            {projectsVisible && (
              <>
                <span className="index" data-v-28f4920b="">
                  03
                </span>
                <h3 className="t-h3" data-v-28f4920b="">
                  Coming Soon
                </h3>
                <Media
                  handleError={handleError}
                  image="/images/fluttershy.jpg"
                />
              </>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import projects from "./data/Projects.json";
import { ReactLenis } from "lenis/react";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <ReactLenis root>
              <Home />
            </ReactLenis>
          }
        />
        {projects?.map((project) => (
          <Route
            key={project.name}
            path={`/${project.name.replace(/\s+/g, "-")}`}
            element={
              <ReactLenis root>
                <Home projectName={project.name} />
              </ReactLenis>
            }
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;

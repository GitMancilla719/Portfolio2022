import NameContainer from "./components/namecontainer";
import SkillsContainer from "./components/skillcontainer";
import Draggable from "react-draggable";
import AboutContainer from "./components/aboutcontainer";
import ProjectContainer from "./components/projectcontainer";
import { g3 } from "./components/gears";

const App = () => {
  const gear1 = g3("300pt", "300pt", "fill-vsTheme-dark");
  const gear2 = g3("200pt", "200pt", "fill-vsTheme-dark");

  return (
    <div className="main">
      <div className="fixed top-0 left-0 ml-[-100px] mt-[-150px] animate-spinCW">{gear1}</div>
      <div className="fixed top-0 left-0 ml-[-150px] mt-[215px] animate-spinCCW">{gear2}</div>

      <div className="fixed bottom-0 right-0 mr-[-100px] mb-[-150px] animate-spinCW">{gear1}</div>
      <div className="fixed bottom-0 right-0 mr-[-150px] mb-[215px] animate-spinCCW">{gear2}</div>

      <Draggable axis="x">
        <div className="z-10">
          <NameContainer />
        </div>
      </Draggable>

      <Draggable axis="x">
        <div className="z-10">
          <AboutContainer />
        </div>
      </Draggable>

      <Draggable axis="x">
        <div className="z-10">
          <SkillsContainer />
        </div>
      </Draggable>

      <div className="z-10">
        <ProjectContainer />
      </div>
    </div>
  );
};

export default App;

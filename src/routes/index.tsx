import {
  Routes,
  Route
} from "react-router-dom";
import Home from "../pages/HomePage/page";
import Personal from "../pages/PersonalPage/page";
import Education from "../pages/EducationPage/page";
import WorkExp from "../pages/WorkExpPage/page";
import Skills from "../pages/SkillsPage/page";
import Summary from "../pages/SummaryPage/page";
import { useStyletron } from "baseui";

function Navigation () {
  const [css, $theme] = useStyletron();

  return (
    <div className={css({
      display:'flex',
      flexDirection:'column',
     })}>
       
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personal" element={<Personal/>} />
        <Route path="/education" element={<Education/>} />
        <Route path="/work-exp" element={<WorkExp/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/summary" element={<Summary/>} />

      </Routes>
    </div>

  );
}

export default Navigation 
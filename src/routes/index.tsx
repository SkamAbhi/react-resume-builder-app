import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/HomePage";
import Personal from "../pages/PersonalPage";
import Education from "../pages/EducationPage";
import WorkExp from "../pages/WorkExpPage";
import Skills from "../pages/SkillsPage";
import Summary from "../pages/SummaryPage";
import { useStyletron } from "baseui";
import Layout from "../components/Layout";
import Finalize from "../pages/FinalizePage";
import Languages from "../pages/LanguagePage";

function Routing() {
  const [css] = useStyletron();
  const location = useLocation();

  // Check if the current route is the home route
  const isHomePage = location.pathname === "/";

  return (
    <div className={css({ margin: 0, padding: 0 })}>
     
      {isHomePage ? (
        <Home />
      ) : (
        <Layout>
          <Routes>
            <Route path="/personal" element={<Personal />} />
            <Route path="/education" element={<Education />} />
            <Route path="/work-exp" element={<WorkExp />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/finalize" element={<Finalize/>} />
            <Route path="/languages" element={<Languages nextLink={""} />} />
          </Routes>
        </Layout>
      )}
    </div>
  );
}

export default Routing;

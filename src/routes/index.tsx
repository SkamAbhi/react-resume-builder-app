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
import Languages from "../pages/ExtraPages/LanguagePage";
import SignIn from "../pages/SignInPage";
import SignUp from "../pages/SignUpPage";
import ForgotPassword from "../pages/ForgotPassword";
import Project from "../pages/ProjectPage";
import ProjectList from "../pages/ProjectPage/project-list";
import ExperienceList from "../pages/WorkExpPage/workExpList";
import Accomplishments from "../pages/ExtraPages/AccomplishmentPage";
import Download from "../pages/DownloadPage";

function Routing() {
  const [css] = useStyletron();
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <div className={css({ margin: 0, padding: 0 })}>
      {isHomePage ? (
        <Home />
      ) : (
        <Layout>
          <Routes>
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/personal" element={<Personal />} />
            <Route path="/education" element={<Education />} />
            <Route path="/project" element={<Project />} />
            <Route path="/project-list" element={<ProjectList />} />
            <Route path="/work-exp-list" element={<ExperienceList />} />
            <Route path="/work-exp" element={<WorkExp />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/finalize" element={<Finalize />} />
            <Route path="/download" element={<Download />} />
            <Route path="/languages" element={<Languages nextLink={""} />} />
            <Route path="/accomplishments" element={<Accomplishments />} />
          </Routes>
        </Layout>
      )}
    </div>
  );
}

export default Routing;

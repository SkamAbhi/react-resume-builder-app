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

  const isHomePage = location.pathname === "/";
  const resumeData = {
    basics: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      location: {
        address: '123 Main St, City, Country',
      },
      website: 'www.johndoe.com',
    },
    education: [
      {
        institution: 'University of Example',
        location: 'City, Country',
        area: 'Computer Science',
        studyType: 'Bachelor',
        startDate: '2018-09-01',
        endDate: '2022-05-01',
        score: '3.8',
      },
    ],
    work: [
      {
        name: 'Example Company',
        position: 'Software Developer',
        location: 'City, Country',
        startDate: '2022-06-01',
        endDate: 'Present',
        highlights: ['Developed web applications', 'Collaborated with cross-functional teams'],
      },
    ],
    skills: [
      {
        name: 'Programming Languages',
        keywords: ['JavaScript', 'Python', 'Java'],
      },
      {
        name: 'Web Technologies',
        keywords: ['React', 'Node.js', 'HTML/CSS'],
      },
    ],
    projects: [
      {
        name: 'Project X',
        description: 'A web application for managing tasks.',
        keywords: ['React', 'Node.js', 'MongoDB'],
        url: 'https://example.com/projectx',
      },
    ],
    awards: [
      {
        title: 'Outstanding Performer Award',
        summary: 'Recognized for exceptional performance in project delivery.',
        awarder: 'Example Company',
        date: '2023-02-15',
      },
    ],
    headings: {
      education: 'Education',
      work: 'Work Experience',
      skills: 'Skills',
      projects: 'Projects',
      awards: 'Awards',
    },
  };

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
            <Route path="/finalize" element={<Finalize data={resumeData}/>} />
            <Route path="/languages" element={<Languages nextLink={""} />} />
          </Routes>
        </Layout>
      )}
    </div>
  );
}

export default Routing;

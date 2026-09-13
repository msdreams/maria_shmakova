import { BrowserRouter, Navigate, Route, Routes, useParams } from "react-router-dom";
import App from "./App";
import { HomePage } from "./Components/home/HomePage";
import { ScrollToTop } from "./Components/layout/ScrollToTop";
import { CaseStudyPage } from "./Components/project/CaseStudyPage";
import { ProjectsPage } from "./Components/projects/ProjectsPage";
import { ResumePage } from "./Components/resume/ResumePage";

/** Case studies moved from /project/:id to /projects/:id; keep old links alive. */
const LegacyProjectRedirect = () => {
  const { id } = useParams<{ id: string }>();
  return <Navigate to={`/projects/${id}`} replace />;
};

export const Root = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="projects/:id" element={<CaseStudyPage />} />
        <Route path="project/:id" element={<LegacyProjectRedirect />} />
        <Route path="resume" element={<ResumePage />} />
        <Route path="bio" element={<Navigate to="/resume" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

import { BrowserRouter, Navigate, Route, Routes, useParams } from "react-router-dom";
import App from "./App";
import { HomePage } from "./Components/home/HomePage";
import { CaseStudyPage } from "./Components/project/CaseStudyPage";
import { ResumePage } from "./Components/resume/ResumePage";

/** Case studies moved from /project/:id to /projects/:id; keep old links alive. */
const LegacyProjectRedirect = () => {
  const { id } = useParams<{ id: string }>();
  return <Navigate to={`/projects/${id}`} replace />;
};

export const Root = () => (
  <BrowserRouter>
    <Routes>
      {/* The project list lives on the home page now. Kept outside the layout
          so the redirect doesn't run inside the page transition. */}
      <Route path="projects" element={<Navigate to="/" replace state={{ scrollTo: "work" }} />} />
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="projects/:id" element={<CaseStudyPage />} />
        <Route path="project/:id" element={<LegacyProjectRedirect />} />
        <Route path="cv" element={<ResumePage />} />
        {/* old addresses keep working */}
        <Route path="resume" element={<Navigate to="/cv" replace />} />
        <Route path="bio" element={<Navigate to="/cv" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

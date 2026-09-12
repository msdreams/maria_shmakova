import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "./App";
import { HomePage } from "./Components/home/HomePage";
import { ScrollToTop } from "./Components/layout/ScrollToTop";
import { CaseStudyPage } from "./Components/project/CaseStudyPage";
import { ResumePage } from "./Components/resume/ResumePage";

export const Root = () => (
  <HashRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="project/:id" element={<CaseStudyPage />} />
        <Route path="resume" element={<ResumePage />} />
        <Route path="bio" element={<Navigate to="/resume" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  </HashRouter>
);

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TemplatesPreviewPage from "./pages/TemplatesPreviewPage";
import Footer from "./components/landingpage/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import ResumeFormPage from "./pages/ResumeFormPage";
import ResumeTemplates from "./pages/ResumeTemplates";
import ResumeDownload from "./pages/ResumeDownload";
import NotFoundPage from "./pages/NotFoundPage";
import PolicyPage from "./pages/PolicyPage";
import TermsPage from "./pages/TermsPage";
import ContactPage from "./pages/ContactPage";
import SampleResumePics from "./pages/SampleResumePics";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/preview" element={<TemplatesPreviewPage />} />
          <Route path="/userdetails" element={<ResumeFormPage />} />
          <Route path="/templates" element={<ResumeTemplates />} />
          <Route path="/resume/:templateId" element={<ResumeDownload />} />
          <Route path="/policy" element={<PolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/contact" element={<ContactPage />} />
           <Route path="/sample-resumes" element={<SampleResumePics />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeContext";
import Layout from "@/components/Layout";
import HomePage from "@/pages/HomePage";
import CommandsPage from "@/pages/CommandsPage";
import DockerGuidePage from "@/pages/DockerGuidePage";
import EC2GuidePage from "@/pages/EC2GuidePage";
import LearningPathsPage from "@/pages/LearningPathsPage";
import SavedCommandsPage from "@/pages/SavedCommandsPage";
import AboutPage from "@/pages/AboutPage";
import NotFoundPage from "@/pages/NotFoundPage";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/commands" element={<CommandsPage />} />
            <Route path="/docker-guide" element={<DockerGuidePage />} />
            <Route path="/ec2-guide" element={<EC2GuidePage />} />
            <Route path="/learning-paths" element={<LearningPathsPage />} />
            <Route path="/saved" element={<SavedCommandsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

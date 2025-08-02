import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import SmoothScroll from './components/SmoothScroll';
import Home2 from './components/Pages/Home2';
import ServicesPage from './components/Pages/ServicesPage';
import ServiceDetailsPage from './components/Pages/ServiceDetailsPage';
import TeamPage from './components/Pages/TeamPage';
import TeamMemberPage from './components/Pages/TeamMemberPage';
import BlogListPage from './components/Pages/BlogListPage';
import BlogDetailsPage from './components/Pages/BlogDetailsPage';
import ContactPage from './components/Pages/ContactPage';
import LawcademicsHubPage from './components/Pages/LawcademicsHubPage';

function App() {
  return (
    <SmoothScroll>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home2 />} />

          <Route path="/service" element={<ServicesPage />} />
          <Route path="/service/:serviceId" element={<ServiceDetailsPage />} />
          <Route path="/service/constitutional-advocacy" element={<ServiceDetailsPage />} />
          <Route path="/service/digital-case-management" element={<ServiceDetailsPage />} />
          <Route path="/service/lawcademics" element={<ServiceDetailsPage />} />
          <Route path="/service/corporate-legal-support" element={<ServiceDetailsPage />} />
          <Route path="/service/lawconomic-solutions" element={<ServiceDetailsPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/team/:teamId" element={<TeamMemberPage />} />
          <Route path="/team/sabahat-syed" element={<TeamMemberPage />} />
          <Route path="/team/raza-hyder" element={<TeamMemberPage />} />
          <Route path="/team/fatima-jilani" element={<TeamMemberPage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:blogId" element={<BlogDetailsPage />} />
          <Route path="/blog/reforming-article-19" element={<BlogDetailsPage />} />
          <Route path="/blog/gender-equity-constitutional-review" element={<BlogDetailsPage />} />
          <Route path="/blog/due-process-detention-laws" element={<BlogDetailsPage />} />
        <Route path="/lawcademics" element={<LawcademicsHubPage />} />
        <Route path="/contact" element={<ContactPage />} />
        </Route>

      </Routes>
    </SmoothScroll>
  );
}

export default App;

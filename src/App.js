import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home2 from './components/Pages/Home2';
import ServicesPage from './components/Pages/ServicesPage';
import ServiceDetailsPage from './components/Pages/ServiceDetailsPage';
import ConstitutionalAdvocacyPage from './components/Pages/services/ConstitutionalAdvocacyPage';
import DigitalCaseManagementPage from './components/Pages/services/DigitalCaseManagementPage';
import LawcademicsPage from './components/Pages/services/LawcademicsPage';
import CorporateLegalSupportPage from './components/Pages/services/CorporateLegalSupportPage';
import LawconomicSolutionsPage from './components/Pages/services/LawconomicSolutionsPage';
import DivorceLawyerPage from './components/Pages/services/DivorceLawyerPage';
import ChildCustodyPage from './components/Pages/services/ChildCustodyPage';
import GuardianshipLawyerPage from './components/Pages/services/GuardianshipLawyerPage';
import DomesticViolenceLawyerPage from './components/Pages/services/DomesticViolenceLawyerPage';
import PropertyLawyerPage from './components/Pages/services/PropertyLawyerPage';
import InheritanceOfPropertyPage from './components/Pages/services/InheritanceOfPropertyPage';
import SuccessionCertificatePage from './components/Pages/services/SuccessionCertificatePage';
import CriminalLawyerPage from './components/Pages/services/CriminalLawyerPage';
import CivilLawyerPage from './components/Pages/services/CivilLawyerPage';
import FiaLawyerPage from './components/Pages/services/FiaLawyerPage';
import CompanyLawyerPage from './components/Pages/services/CompanyLawyerPage';
import CompanyRegistrationPage from './components/Pages/services/CompanyRegistrationPage';
import FoundationTrustNgoPage from './components/Pages/services/FoundationTrustNgoPage';
import LegalNoticePage from './components/Pages/services/LegalNoticePage';
import DocumentationLawyerPage from './components/Pages/services/DocumentationLawyerPage';
import ProcessorServerPage from './components/Pages/services/ProcessorServerPage';
import AsylumLawyerPage from './components/Pages/services/AsylumLawyerPage';
import PrivateInvestigatorPage from './components/Pages/services/PrivateInvestigatorPage';
import LegalAdvisorPage from './components/Pages/services/LegalAdvisorPage';
import BlogListPage from './components/Pages/BlogListPage';
import BlogGridPage from './components/Pages/BlogGridPage';
import BlogDetailsPage from './components/Pages/BlogDetailsPage';
import ContactPage from './components/Pages/ContactPage';
import LawcademicsHubPage from './components/Pages/LawcademicsHubPage';
import AboutPage from './components/Pages/AboutPage';
import TeamPage from './components/Pages/TeamPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home2 />} />

        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/service" element={<ServicesPage />} />
        
        {/* Individual Service Pages */}
        <Route path="/service/constitutional-advocacy" element={<ConstitutionalAdvocacyPage />} />
        <Route path="/service/digital-case-management" element={<DigitalCaseManagementPage />} />
        <Route path="/service/lawcademics" element={<LawcademicsPage />} />
        <Route path="/service/corporate-legal-support" element={<CorporateLegalSupportPage />} />
        <Route path="/service/lawconomic-solutions" element={<LawconomicSolutionsPage />} />
        <Route path="/service/divorce-lawyer" element={<DivorceLawyerPage />} />
        <Route path="/service/child-custody" element={<ChildCustodyPage />} />
        <Route path="/service/guardianship-lawyer" element={<GuardianshipLawyerPage />} />
        <Route path="/service/domestic-violence-lawyer" element={<DomesticViolenceLawyerPage />} />
        <Route path="/service/property-lawyer" element={<PropertyLawyerPage />} />
        <Route path="/service/inheritance-of-property" element={<InheritanceOfPropertyPage />} />
        <Route path="/service/succession-certificate" element={<SuccessionCertificatePage />} />
        <Route path="/service/criminal-lawyer" element={<CriminalLawyerPage />} />
        <Route path="/service/civil-lawyer" element={<CivilLawyerPage />} />
        <Route path="/service/fia-lawyer" element={<FiaLawyerPage />} />
        <Route path="/service/company-lawyer" element={<CompanyLawyerPage />} />
        <Route path="/service/company-registration" element={<CompanyRegistrationPage />} />
        <Route path="/service/foundation-trust-ngo" element={<FoundationTrustNgoPage />} />
        <Route path="/service/legal-notice" element={<LegalNoticePage />} />
        <Route path="/service/documentation-lawyer" element={<DocumentationLawyerPage />} />
        <Route path="/service/processor-server" element={<ProcessorServerPage />} />
        <Route path="/service/asylum-lawyer" element={<AsylumLawyerPage />} />
        <Route path="/service/private-investigator" element={<PrivateInvestigatorPage />} />
        <Route path="/service/legal-advisor" element={<LegalAdvisorPage />} />
        
        {/* Fallback for any remaining services - can be removed once all are individual */}
        <Route path="/service/:serviceId" element={<ServiceDetailsPage />} />
        
        <Route path="/blog" element={<BlogListPage />} />
        <Route path="/blog-grid" element={<BlogGridPage />} />
        <Route path="/blog/:blogId" element={<BlogDetailsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/lawcademics" element={<LawcademicsHubPage />} />
        <Route path="/lawcademics-hub" element={<LawcademicsHubPage />} />
        <Route path="/team" element={<TeamPage />} />
      </Route>
    </Routes>
  );
}

export default App;

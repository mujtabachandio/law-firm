import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
// Not lazy: this only redirects, so it should not wait on a chunk download.
import StudioRedirect from './components/Pages/StudioRedirect';
const Home2 = lazy(() => import('./components/Pages/Home2'));
const ServicesPage = lazy(() => import('./components/Pages/ServicesPage'));
const ServiceDetailsPage = lazy(() => import('./components/Pages/ServiceDetailsPage'));
const ConstitutionalAdvocacyPage = lazy(() => import('./components/Pages/services/ConstitutionalAdvocacyPage'));
const DigitalCaseManagementPage = lazy(() => import('./components/Pages/services/DigitalCaseManagementPage'));
const LawcademicsPage = lazy(() => import('./components/Pages/services/LawcademicsPage'));
const CorporateLegalSupportPage = lazy(() => import('./components/Pages/services/CorporateLegalSupportPage'));
const LawconomicSolutionsPage = lazy(() => import('./components/Pages/services/LawconomicSolutionsPage'));
const DivorceLawyerPage = lazy(() => import('./components/Pages/services/DivorceLawyerPage'));
const ChildCustodyPage = lazy(() => import('./components/Pages/services/ChildCustodyPage'));
const GuardianshipLawyerPage = lazy(() => import('./components/Pages/services/GuardianshipLawyerPage'));
const DomesticViolenceLawyerPage = lazy(() => import('./components/Pages/services/DomesticViolenceLawyerPage'));
const MaintenanceReconciliationPage = lazy(() => import('./components/Pages/services/MaintenanceReconciliationPage'));
const PropertyLawyerPage = lazy(() => import('./components/Pages/services/PropertyLawyerPage'));
const InheritanceOfPropertyPage = lazy(() => import('./components/Pages/services/InheritanceOfPropertyPage'));
const SuccessionCertificatePage = lazy(() => import('./components/Pages/services/SuccessionCertificatePage'));
const CriminalLawyerPage = lazy(() => import('./components/Pages/services/CriminalLawyerPage'));
const CivilLawyerPage = lazy(() => import('./components/Pages/services/CivilLawyerPage'));
const FiaLawyerPage = lazy(() => import('./components/Pages/services/FiaLawyerPage'));
const CompanyLawyerPage = lazy(() => import('./components/Pages/services/CompanyLawyerPage'));
const CompanyRegistrationPage = lazy(() => import('./components/Pages/services/CompanyRegistrationPage'));
const FoundationTrustNgoPage = lazy(() => import('./components/Pages/services/FoundationTrustNgoPage'));
const LegalNoticePage = lazy(() => import('./components/Pages/services/LegalNoticePage'));
const DocumentationLawyerPage = lazy(() => import('./components/Pages/services/DocumentationLawyerPage'));
const ProcessorServerPage = lazy(() => import('./components/Pages/services/ProcessorServerPage'));
const AsylumLawyerPage = lazy(() => import('./components/Pages/services/AsylumLawyerPage'));
const PrivateInvestigatorPage = lazy(() => import('./components/Pages/services/PrivateInvestigatorPage'));
const LegalAdvisorPage = lazy(() => import('./components/Pages/services/LegalAdvisorPage'));
const FamilyLawPage = lazy(() => import('./components/Pages/services/FamilyLawPage'));
const PropertyLawPage = lazy(() => import('./components/Pages/services/PropertyLawPage'));
const CriminalLawPage = lazy(() => import('./components/Pages/services/CriminalLawPage'));
const CorporateLawPage = lazy(() => import('./components/Pages/services/CorporateLawPage'));
const FbrLawyerPage = lazy(() => import('./components/Pages/services/FbrLawyerPage'));
const DocumentationPage = lazy(() => import('./components/Pages/services/DocumentationPage'));
const ImmigrationPage = lazy(() => import('./components/Pages/services/ImmigrationPage'));
const BlogPage = lazy(() => import('./components/Pages/BlogPage'));
const BlogDetailsPage = lazy(() => import('./components/Pages/BlogDetailsPage'));
const ContactPage = lazy(() => import('./components/Pages/ContactPage'));
const LawcademicsHubPage = lazy(() => import('./components/Pages/LawcademicsHubPage'));
const AboutPage = lazy(() => import('./components/Pages/AboutPage'));
const TeamPage = lazy(() => import('./components/Pages/TeamPage'));
const ReviewsPage = lazy(() => import('./components/Pages/ReviewsPage'));
const PrivacyPolicyPage = lazy(() => import('./components/Pages/PrivacyPolicyPage'));
const TermsPage = lazy(() => import('./components/Pages/TermsPage'));
const ThankYouPage = lazy(() => import('./components/Pages/ThankYouPage'));

function App() {
  return (
    <Suspense fallback={<div className="container py-5">Loading...</div>}>
      <Routes>
        {/* Sanity Studio runs as its own app; /studio forwards to it. */}
        <Route path="/studio" element={<StudioRedirect />} />

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
        <Route path="/service/maintenance-reconciliation" element={<MaintenanceReconciliationPage />} />
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
        <Route path="/service/fbr-lawyer" element={<FbrLawyerPage />} />
        {/*
          The capitalised /service/Family-Law is redirected by .htaccess, not here.
          React Router matches paths case-insensitively, so a <Navigate> route for
          the capitalised spelling also matched its own lowercase target and the
          two bounced off each other forever, leaving the page blank. A server 301
          is also the right answer for SEO: one indexable URL, resolved before the
          app ever loads.
        */}
        
        {/* Main Service Category Pages */}
        <Route path="/service/family-law" element={<FamilyLawPage />} />
        <Route path="/service/property-law" element={<PropertyLawPage />} />
        <Route path="/service/criminal-law" element={<CriminalLawPage />} />
        <Route path="/service/corporate-law" element={<CorporateLawPage />} />
        <Route path="/service/documentation-process" element={<DocumentationPage />} />
        <Route path="/service/immigration-specialized" element={<ImmigrationPage />} />
        
        {/* Fallback for any remaining services - can be removed once all are individual */}
        <Route path="/service/:serviceId" element={<ServiceDetailsPage />} />
        
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:blogId" element={<BlogDetailsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/lawcademics" element={<LawcademicsHubPage />} />
        {/* Duplicate of /lawcademics -> redirect rather than canonicalise. */}
        <Route path="/lawcademics-hub" element={<Navigate to="/lawcademics" replace />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        {/*
          Reachable only by submitting a form — the page itself turns away
          anyone arriving without one. Kept out of the sitemap by EXCLUDED
          in scripts/generateSitemap.mjs and noindex in its own head.
        */}
        <Route path="/thank-you" element={<ThankYouPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;

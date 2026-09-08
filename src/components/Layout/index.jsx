import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Canonical from '../SEO/Canonical';
import Footer from '../Footer';
import Header from '../Header';

export default function Layout() {
  return (
    <>
      {/* Global default SEO tags – individual pages override these with their own <Helmet> */}
      <Helmet>
        <title>Karachi Law Firms | Expert Lawyers & Legal Services</title>
        <meta
          name="description"
          content="Karachi Law Firms (KLF) provides expert legal services across family, criminal, property, corporate and constitutional law, combining digital transparency with research-backed advocacy."
        />
        <meta
          name="keywords"
          content="Karachi Law Firms, Lawyers in Karachi, Legal Services Karachi, Law Firm Pakistan, Family Law, Criminal Law, Property Law, Corporate Law, Constitutional Advocacy"
        />
      </Helmet>
      <Canonical />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

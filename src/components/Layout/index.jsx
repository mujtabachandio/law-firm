import { Outlet } from 'react-router-dom';
import Canonical from '../SEO/Canonical';
import Footer from '../Footer';
import Header from '../Header';

export default function Layout() {
  return (
    <>
      <Canonical />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

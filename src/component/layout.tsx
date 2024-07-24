import Footer from './footer';
import Navbar from './navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <div className='flex-grow bg-[#433D8B]'>
      <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

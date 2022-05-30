import Navbar from './Navbar/navbar';
import Footer from './Footer/footer';
import { MainContainer } from 'components';

const Layout = () => {
  return (
    <>
      <Navbar />
      <MainContainer />
      <Footer />
    </>
  );
}

export default Layout;
import './navbar.scss';
import { LogoUrl } from 'constants/index';

const Navbar = () => {
  return (
    <header className="container-fluid d-flex align-items-center px-4">
      <img src={LogoUrl} alt="logo" />
      <h2 className='my-0 ms-3'>Unsplash Search app</h2>
    </header>
  );
}

export default Navbar;
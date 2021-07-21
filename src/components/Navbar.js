import SearchForm from '../containers/SearchForm';
import '../styles/Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <h1 className="nav-title">CryptoTracker</h1>
    <SearchForm />
  </nav>
);

export default Navbar;

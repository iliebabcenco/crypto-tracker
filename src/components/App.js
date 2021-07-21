import Navbar from './Navbar';
import Routes from '../routes/Routes';
import '../styles/App.css';
import Footer from './Footer';

const App = () => (
  <div className="app-div">
    <Navbar />
    <Routes />
    <Footer />
  </div>
);

export default App;

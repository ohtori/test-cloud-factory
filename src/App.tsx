import {BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';
import TickerPopup from './components/TickerPopup';

function App() {
  return (
    <Router>
      <TickerPopup />
      <Header />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;

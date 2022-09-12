// Dependencies
import { Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Sections/Home/Home';

// Hooks
import { useMenu } from './hooks/useMenu';
import { useTranslate } from './hooks/useTranslate';

// Sections
import Menu from './components/Sections/Menu';
import Contact from './components/Sections/Contact/Contact';

// Texts
import { textScheme } from './i18n/textStore';

function App() {
  const [isShow, goMenuManager] = useMenu();
  const [translation] = useTranslate(textScheme);
  const { menu, contanct } = translation();

  return (
    <div className="App">
      <Navbar showMenu={isShow} showMenuEvent={goMenuManager} />
      <Home />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<Contact translation={contanct} />} />
        <Route path="/menu" element={<Menu menuTexts={menu} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

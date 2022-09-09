// Dependencies
import { Routes, Route } from 'react-router-dom'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Hooks
import { useMenu } from './hooks/useMenu'
import { useTranslate } from './hooks/useTranslate'

// Sections
import Menu from './components/Menu'

// Texts
import { textScheme } from './i18n/textStore'

function App() {
  const [isShow, isShowEvent] = useMenu()
  const [translation] = useTranslate(textScheme)

  const { menu } = translation()
  return (
    <div className="App">
      <Navbar showMenu={isShow} showMenuEvent={isShowEvent} />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="about" element={<h1>About</h1>} />
        <Route path="contact" element={<h1>Contact</h1>} />
        <Route path="menu" element={<Menu menuTexts={menu} />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

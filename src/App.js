// Dependencies
import { Routes, Route } from 'react-router-dom'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Hooks
import { useMenu } from './hooks/useMenu'

function App() {
  const [isShow, isShowEvent] = useMenu()

  return (
    <div className="App">
      <Navbar showMenu={isShow} showMenuEvent={isShowEvent} />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="about" element={<h1>About</h1>} />
        <Route path="contact" element={<h1>Contact</h1>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

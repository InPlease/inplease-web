// Dependencies
import { Routes, Route } from 'react-router-dom'
import Ourvoice from './components/Ourvoice'
function App() {
  return (
    <div className="App">
      <Ourvoice />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="about" element={<h1>About</h1>} />
        <Route path="contact" element={<h1>Contact</h1>} />
      </Routes>
    </div>
  )
}

export default App

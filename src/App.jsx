import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import MenuPage from './pages/MenuPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/menu" element={<MenuPage />} />
    </Routes>
  )
}

export default App

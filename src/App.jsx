import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import MenuPage from './pages/MenuPage'
import TorneoPage from './pages/TorneoPage'
import EstadisticasPage from './pages/EstadisticasPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/torneo" element={<TorneoPage />} />
      <Route path="/estadisticas" element={<EstadisticasPage />} />
    </Routes>
  )
}

export default App

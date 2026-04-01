import { ThemeToggle } from '../components/ThemeToggle'
import { useNavigate } from 'react-router-dom'

export default function MenuPage() {
  const navigate = useNavigate()

  return (
    <div className="menu-page">
      <ThemeToggle />
      <main>
        <h1>Bienvenido a Sudoku</h1>
        <p>Selecciona una opción para comenzar</p>

        <div className="buttons">
          <button 
            className="btn"
            onClick={() => navigate('/torneo')}
          >
            Empezar Torneo
          </button>

          <button 
            className="btn"
            onClick={() => navigate('/estadisticas')}
          >
            Ver Estadísticas
          </button>
        </div>
      </main>
    </div>
  )
}

import { Sidebar } from '../components/Sidebar'
import { ThemeToggle } from '../components/ThemeToggle'

export default function MenuPage() {
  return (
    <div className="menu-page">
      <ThemeToggle />
      <Sidebar />
      
      <main>
        <h1>Bienvenido a Sudoku</h1>
        <p>Selecciona una opción para comenzar a jugar</p>

        <div className="buttons">
          <button className="btn">Nuevo Juego</button>
          <button className="btn">Continuar</button>
          <button className="btn">Estadísticas</button>
        </div>
      </main>
    </div>
  )
}

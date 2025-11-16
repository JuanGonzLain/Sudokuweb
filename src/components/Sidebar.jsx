import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme } = useTheme()

  return (
    <>
      <header>
        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          <i className="fas fa-bars"></i>
        </div>
        <div className="logo-container">
          <img 
            src={theme === 'oscuro' ? '/public/imagenes/LogoFO.png' : '/public/imagenes/LogoFC.png'} 
            alt="Logo Sudoku" 
            id="logo-sudoku" 
          />
        </div>
      </header>

      <aside id="sidebar" className={isOpen ? 'active' : ''}>
        <nav>
          <ul>
            <li><Link to="#">Nuevo Juego</Link></li>
            <li><Link to="#">Continuar</Link></li>
            <li><Link to="#">Estadísticas</Link></li>
            <li><Link to="#">Opciones</Link></li>
            <li><Link to="/">Cerrar Sesión</Link></li>
          </ul>
        </nav>
      </aside>
    </>
  )
}

import { useNavigate } from 'react-router-dom'
import { BackgroundNumbers } from '../components/BackgroundNumbers'
import { ThemeToggle } from '../components/ThemeToggle'
import { useTheme } from '../contexts/ThemeContext'

export default function LoginPage() {
  const navigate = useNavigate()
  const { theme } = useTheme()

  const handleLogin = (e) => {
    e.preventDefault()
    navigate('/menu')
  }

  return (
    <div className="login-page">
      <ThemeToggle />
      <BackgroundNumbers />
      
      <div className="contenedor-login">
        <div className="sudoku-logo">
          <img 
            src={theme === 'oscuro' ? '/public/imagenes/LogoFO.png' : '/public/imagenes/LogoFC.png'}
            alt="Sudoku Logo" 
            id="logo-sudoku"
          />
        </div>
        <form onSubmit={handleLogin}>
          <div className="grupo-input">
            <input type="text" placeholder="Usuario" required />
            <i className="fas fa-user icono"></i>
          </div>

          <div className="grupo-input">
            <input type="password" placeholder="Contraseña" required />
            <i className="fas fa-lock icono"></i>
          </div>
          <button type="submit" className="btn">INICIAR SESIÓN</button>
        </form>
      </div>
    </div>
  )
}

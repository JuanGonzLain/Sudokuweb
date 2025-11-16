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

          <div className="opciones">
            <a href="#">¿Olvidaste tu contraseña?</a>
            <a href="#">Regístrate</a>
          </div>

          <button type="submit" className="btn">INICIAR SESIÓN</button>
        </form>

        <p className="texto-alt">O continúa con:</p>
        <div className="login-social">
          <button className="btn-social" type="button">
            <i className="fab fa-google"></i>
          </button>
          <button className="btn-social" type="button">
            <i className="fab fa-facebook-f"></i>
          </button>
          <button className="btn-social" type="button">
            <i className="fas fa-envelope"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

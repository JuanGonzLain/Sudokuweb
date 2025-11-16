import { useTheme } from '../contexts/ThemeContext'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button 
      className="btn-toggle" 
      onClick={toggleTheme}
      aria-label="Cambiar tema"
    >
      <i className={`fas ${theme === 'claro' ? 'fa-moon' : 'fa-sun'}`}></i>
    </button>
  )
}

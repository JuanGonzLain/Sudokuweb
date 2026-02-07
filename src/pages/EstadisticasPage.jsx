import { ThemeToggle } from '../components/ThemeToggle'

// Datos de ejemplo (luego vendrán de BD / backend)
const JUGADORES = [
  { nombre: 'Carlos M.', iniciales: 'CM', tiempo: '03:24', puntos: 980 },
  { nombre: 'Ana R.', iniciales: 'AR', tiempo: '04:01', puntos: 920 },
  { nombre: 'Luis G.', iniciales: 'LG', tiempo: '04:33', puntos: 870 },
  { nombre: 'Maria P.', iniciales: 'MP', tiempo: '05:12', puntos: 810 },
  { nombre: 'Jorge S.', iniciales: 'JS', tiempo: '05:45', puntos: 750 },
  { nombre: 'Elena F.', iniciales: 'EF', tiempo: '06:18', puntos: 690 },
  { nombre: 'Pedro L.', iniciales: 'PL', tiempo: '07:02', puntos: 640 },
  { nombre: 'Sofia D.', iniciales: 'SD', tiempo: '07:55', puntos: 580 },
  { nombre: 'David T.', iniciales: 'DT', tiempo: '08:20', puntos: 520 },
  { nombre: 'Laura V.', iniciales: 'LV', tiempo: '08:59', puntos: 480 },
  { nombre: 'Andres B.', iniciales: 'AB', tiempo: '09:30', puntos: 430 },
  { nombre: 'Natalia C.', iniciales: 'NC', tiempo: '10:10', puntos: 390 },
]

export default function EstadisticasPage() {
  const top12 = JUGADORES.slice(0, 12)
  const ganador = top12[0]

  return (
    <div className="login-page" style={{ minHeight: '100vh' }}>
      <ThemeToggle />

      <main className="contenedor-estadisticas">
        <h1 className="titulo">Estadísticas del Torneo</h1>

        {/* 🏆 GANADOR */}
        {ganador && (
          <div className="ganador-card">
            🏆 <strong>{ganador.nombre}</strong> es el ganador del torneo
            <span> — {ganador.puntos} puntos</span>
          </div>
        )}

        {/* 📊 TABLA */}
        <div className="tabla-posiciones">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Jugador</th>
                <th>Tiempo</th>
                <th>Pts</th>
              </tr>
            </thead>

            <tbody>
              {top12.map((jugador, i) => {
                const posClass =
                  i === 0 ? 'top-1' : i === 1 ? 'top-2' : i === 2 ? 'top-3' : ''

                return (
                  <tr key={jugador.nombre}>
                    <td>
                      <span className={`posicion-num ${posClass}`}>
                        {i + 1}
                      </span>
                    </td>
                    <td>
                      <div className="nombre-jugador">
                        <span className="avatar-jugador">
                          {jugador.iniciales}
                        </span>
                        {jugador.nombre}
                      </div>
                    </td>
                    <td className="tiempo-jugador">{jugador.tiempo}</td>
                    <td className="puntos-jugador">{jugador.puntos}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>

          <p className="tabla-info">Mostrando Top 12 jugadores</p>
        </div>
      </main>
    </div>
  )
}

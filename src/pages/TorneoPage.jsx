'use client'

import { useState, useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { BackgroundNumbers } from '@/components/BackgroundNumbers'
import { ThemeToggle } from '@/components/ThemeToggle'

const JUGADORES = [
  { nombre: 'Carlos M.', iniciales: 'CM', tiempo: '03:24', puntos: 980 },
  { nombre: 'Ana R.', iniciales: 'AR', tiempo: '04:01', puntos: 920 },
  { nombre: 'Luis G.', iniciales: 'LG', tiempo: '04:33', puntos: 870 },
  { nombre: 'Maria P.', iniciales: 'MP', tiempo: '05:12', puntos: 810 },
  { nombre: 'Jorge S.', iniciales: 'JS', tiempo: '05:45', puntos: 750 },
  { nombre: 'Elena F.', iniciales: 'EF', tiempo: '06:18', puntos: 690 },
  { nombre: 'Pedro L.', iniciales: 'PL', tiempo: '07:02', puntos: 640 },
  { nombre: 'Sofia D.', iniciales: 'SD', tiempo: '07:55', puntos: 580 },
  { nombre: 'Extra 1', iniciales: 'E1', tiempo: '08:10', puntos: 540 },
  { nombre: 'Extra 2', iniciales: 'E2', tiempo: '08:40', puntos: 500 },
  { nombre: 'Extra 3', iniciales: 'E3', tiempo: '09:10', puntos: 470 },
  { nombre: 'Extra 4', iniciales: 'E4', tiempo: '09:40', puntos: 430 },
  { nombre: 'NO SE VE', iniciales: 'XX', tiempo: '10:00', puntos: 300 },
]

export default function TorneoPage() {
  const navigate = useNavigate()

  const [board, setBoard] = useState(
    Array.from({ length: 9 }, () => Array(9).fill(''))
  )
  const [selectedCell, setSelectedCell] = useState(null)

  // ✅ Redirigir cuando el tablero esté lleno
  useEffect(() => {
    const completo = board.flat().every(c => c !== '')
    if (!completo) return

    const timer = setTimeout(() => {
      navigate('/estadisticas')
    }, 1000)

    return () => clearTimeout(timer)
  }, [board, navigate])

  const handleChange = (r, c, value) => {
    if (!/^[1-9]?$/.test(value)) return
    const copy = board.map(row => [...row])
    copy[r][c] = value
    setBoard(copy)
  }

  return (
    <div className="login-page" style={{ overflow: 'auto' }}>
      <BackgroundNumbers />
      <ThemeToggle />

      <div className="torneo-layout">
        {/* ===== SUDOKU ===== */}
        <main className="contenedor-sudoku">
          <h1 className="titulo">Torneo de Sudoku</h1>
          <p className="subtitulo">Completa el tablero lo más rápido posible</p>

          <div className="sudoku-board">
            {board.map((row, r) =>
              row.map((cell, c) => (
                <input
                  key={`${r}-${c}`}
                  className="sudoku-cell"
                  value={cell}
                  maxLength={1}
                  onChange={(e) => handleChange(r, c, e.target.value)}
                />
              ))
            )}
          </div>
        </main>

        {/* ===== TABLA ===== */}
        <aside className="tabla-posiciones">
          <h2 className="titulo-tabla">Posiciones del Torneo</h2>
          <p className="tabla-info">Mostrando Top 12 jugadores</p>

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
              {JUGADORES.slice(0, 12).map((j, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{j.nombre}</td>
                  <td>{j.tiempo}</td>
                  <td>{j.puntos}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </aside>
      </div>
    </div>
  )
}

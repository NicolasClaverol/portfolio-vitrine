'use client'

import { useEffect, useState } from 'react'

// Séquence :
//    0ms → 1000ms : hexagone se trace
// 1000ms → 2000ms : "N" se trace
// 2000ms → 2500ms : pause (tout visible)
// 2500ms → 3000ms : fade out (500ms)
// 3100ms          : retiré du DOM
const REMOVE_DELAY = 3100

export default function Loader() {
  const [removed, setRemoved] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setRemoved(true), REMOVE_DELAY)
    return () => clearTimeout(t)
  }, [])

  if (removed) return null

  return (
    <>
      <style>{`
        @keyframes draw-hex {
          from { stroke-dashoffset: 252; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes draw-n {
          from { stroke-dashoffset: 118; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes loader-fade {
          from { opacity: 1; }
          to   { opacity: 0; }
        }

        .loader-overlay {
          animation: loader-fade 500ms ease 2500ms forwards;
        }

        /* Hexagone : périmètre ≈ 250.7 → dasharray 252 */
        .loader-hex {
          stroke-dasharray: 252;
          stroke-dashoffset: 252;
          animation: draw-hex 1000ms cubic-bezier(0.65, 0, 0.35, 1) both;
        }

        /* N : longueur ≈ 116.1 → dasharray 118 ; délai 1000ms */
        .loader-n {
          stroke-dasharray: 118;
          stroke-dashoffset: 118;
          animation: draw-n 1000ms cubic-bezier(0.65, 0, 0.35, 1) 1000ms both;
        }
      `}</style>

      <div
        className="loader-overlay"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0A192F',
        }}
      >
        <svg
          viewBox="0 0 100 100"
          width="128"
          height="128"
          fill="none"
          aria-hidden="true"
        >
          {/*
            Hexagone pointy-top, centre (50,50), rayon 42
            Périmètre réel : 250.71 → dasharray 252
          */}
          <path
            className="loader-hex"
            d="M 50,8 L 86,29 L 86,71 L 50,92 L 14,71 L 14,29 Z"
            stroke="#64FFDA"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/*
            Lettre "N" à l'intérieur de l'hexagone
            M 33,67 → 33,33 : montée gauche  (34 px)
            33,33   → 67,67 : diagonale       (≈48 px)
            67,67   → 67,33 : montée droite   (34 px)
            Longueur totale : 116.08 → dasharray 118
          */}
          <path
            className="loader-n"
            d="M 33,67 L 33,33 L 67,67 L 67,33"
            stroke="#64FFDA"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </>
  )
}

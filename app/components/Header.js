'use client';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header>
        <div className="container">
          <div className="logo" aria-label="Lebanon Travel Guide Logo">🌍</div>
          <h1>Lebanon Travel Guide</h1>
          <nav className={menuOpen ? 'nav open' : 'nav'}>
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#destinations" onClick={() => setMenuOpen(false)}>Destinations</a>
            <a href="#tours" onClick={() => setMenuOpen(false)}>Tours</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
          <button
            className="menu-toggle"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </header>

      <style jsx>{`
        header {
          background: linear-gradient(90deg, #004080, #002244);
          color: #f0f0f0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
          padding: 1.5rem 2rem;
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .logo {
          font-size: 2.2rem;
          user-select: none;
        }
        h1 {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          font-weight: 700;
          font-size: 1.8rem;
          margin: 0;
          letter-spacing: 1.2px;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.7);
          flex-grow: 1;
        }
        nav {
          display: flex;
          gap: 1.5rem;
        }
        nav a {
          color: #f0f0f0;
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          padding: 0.4rem 0.7rem;
          border-radius: 4px;
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        nav a:hover,
        nav a:focus {
          background-color: #0066cc;
          color: white;
          outline: none;
        }

        .menu-toggle {
          display: none;
          background: none;
          border: none;
          font-size: 2rem;
          color: #f0f0f0;
          cursor: pointer;
          user-select: none;
        }

        /* Responsive */
        @media (max-width: 768px) {
          h1 {
            flex-basis: 100%;
            text-align: center;
            margin-bottom: 0.75rem;
          }
          nav {
            display: none;
            width: 100%;
            flex-direction: column;
            gap: 1rem;
            background-color: #003060;
            padding: 1rem 1.5rem;
            border-radius: 6px;
          }
          nav.open {
            display: flex;
          }
          .menu-toggle {
            display: block;
            margin-left: auto;
          }
          .logo {
            flex-grow: 0;
          }
          .container {
            align-items: center;
          }
        }
      `}</style>
    </>
  );
}

'use client';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-gradient-to-r from-[#004080] to-[#002244] text-gray-100 shadow-md sticky top-0 z-50 py-6 px-8">
      <div className="max-w-[1200px] mx-auto flex flex-wrap items-center gap-4">
        <div className="text-3xl select-none">🌍</div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-wide text-shadow-sm flex-grow text-center sm:text-left">
          Lebanon Travel Guide
        </h1>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden text-3xl ml-auto text-gray-100 focus:outline-none"
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <nav
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } sm:flex flex-col sm:flex-row w-full sm:w-auto gap-4 sm:gap-6 bg-[#003060] sm:bg-transparent rounded-lg px-6 py-4 sm:p-0`}
        >
          {['home', 'destinations', 'tours', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => setMenuOpen(false)}
              className="text-gray-100 font-semibold text-base px-3 py-2 rounded-md hover:bg-blue-600 transition"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </nav>
      </div>
    </header>

      <style jsx>{`
        // header {
        //   background: linear-gradient(90deg, #004080, #002244);
        //   color: #f0f0f0;
        //   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        //   padding: 1.5rem 2rem;
        //   position: sticky;
        //   top: 0;
        //   z-index: 1000;
        // }
        // .container {
        //   max-width: 1200px;
        //   margin: 0 auto;
        //   display: flex;
        //   align-items: center;
        //   gap: 1rem;
        //   flex-wrap: wrap;
        // }
        // .logo {
        //   font-size: 2.2rem;
        //   user-select: none;
        // }
        // h1 {
        //   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        //   font-weight: 700;
        //   font-size: 1.8rem;
        //   margin: 0;
        //   letter-spacing: 1.2px;
        //   text-shadow: 0 1px 3px rgba(0, 0, 0, 0.7);
        //   flex-grow: 1;
        // }
        // nav {
        //   display: flex;
        //   gap: 1.5rem;
        // }
        // nav a {
        //   color: #f0f0f0;
        //   text-decoration: none;
        //   font-weight: 600;
        //   font-size: 1rem;
        //   padding: 0.4rem 0.7rem;
        //   border-radius: 4px;
        //   transition: background-color 0.3s ease, color 0.3s ease;
        // }
        // nav a:hover,
        // nav a:focus {
        //   background-color: #0066cc;
        //   color: white;
        //   outline: none;
        // }

        // .menu-toggle {
        //   display: none;
        //   background: none;
        //   border: none;
        //   font-size: 2rem;
        //   color: #f0f0f0;
        //   cursor: pointer;
        //   user-select: none;
        // }

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

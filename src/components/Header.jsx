import { useState } from 'react'
import { Link } from 'react-router-dom'

function Header({ cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 flex flex-wrap items-center bg-black px-5 py-3 font-['Roboto']">
      <Link to="/" onClick={closeMenu} className="flex items-center">
        <img
          src={`${import.meta.env.BASE_URL}logo.png`}
          alt="Didi's Halal Chinese logo"
          className="h-20 w-20 object-cover"
        />
      </Link>

      <h2 className="ml-4 flex-1 font-['Pacifico'] text-2xl font-normal text-[#00ffff]">
        Didi&apos;s Halal Chinese
      </h2>

      <button
        type="button"
        className="text-3xl text-[#ff1493] md:hidden"
        onClick={() => setMenuOpen((current) => !current)}
        aria-label="Open or close navigation menu"
        aria-expanded={menuOpen}
      >
        ☰
      </button>

      <nav
        className={`w-full flex-wrap items-center justify-center gap-5 pt-4 font-['Pacifico'] text-lg
          md:absolute md:left-1/2 md:flex md:w-auto md:-translate-x-1/2
          md:flex-row md:pt-0 md:text-xl
          ${menuOpen ? 'flex' : 'hidden'}
        `}
      >
        <Link
          to="/"
          onClick={closeMenu}
          className="text-[#ff1493] hover:text-white"
        >
          Home
        </Link>

        <Link
          to="/menu"
          onClick={closeMenu}
          className="text-[#ff1493] hover:text-white"
        >
          Menu
        </Link>

        <Link
          to="/about"
          onClick={closeMenu}
          className="text-[#ff1493] hover:text-white"
        >
          About
        </Link>

        <Link
          to="/contact"
          onClick={closeMenu}
          className="text-[#ff1493] hover:text-white"
        >
          Contact
        </Link>

        <Link
          to="/cart"
          onClick={closeMenu}
          className="text-[#ff1493] hover:text-white"
        >
          Cart ({cartCount})
        </Link>
      </nav>
    </header>
  )
}

export default Header
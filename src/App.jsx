import { useEffect, useRef, useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart')

    return savedCart ? JSON.parse(savedCart) : []
  })

  const [notification, setNotification] = useState('')
  const notificationTimer = useRef(null)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    return () => {
      if (notificationTimer.current) {
        clearTimeout(notificationTimer.current)
      }
    }
  }, [])

  function showNotification(itemName) {
    setNotification(`${itemName} was added to your cart.`)

    if (notificationTimer.current) {
      clearTimeout(notificationTimer.current)
    }

    notificationTimer.current = setTimeout(() => {
      setNotification('')
    }, 2500)
  }

  function addToCart(item) {
    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (cartItem) => cartItem.id === item.id
      )

      if (existingItem) {
        return currentCart.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            : cartItem
        )
      }

      return [
        ...currentCart,
        {
          ...item,
          quantity: 1,
        },
      ]
    })

    showNotification(item.name)
  }

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  )

  return (
    <HashRouter>
      <div className="min-h-screen bg-black text-white">
        <Header cartCount={cartCount} />

        {notification && (
          <div
            role="status"
            aria-live="polite"
            className="fixed left-1/2 top-28 z-[60] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-lg border border-[#ff1493] bg-black px-5 py-4 text-center font-['Roboto'] text-white shadow-lg shadow-[#ff1493]/30"
          >
            <span className="font-semibold text-[#00ffff]">
              {notification}
            </span>
          </div>
        )}

        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/menu"
            element={<Menu addToCart={addToCart} />}
          />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
        </Routes>

        <Footer />
      </div>
    </HashRouter>
  )
}

export default App

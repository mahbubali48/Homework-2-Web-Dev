import { Link } from 'react-router-dom'

function Cart({ cart, setCart }) {
  function changeQuantity(id, amount) {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  function removeItem(id) {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    )
  }

  function clearCart() {
    setCart([])
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <main className="mx-auto min-h-[500px] max-w-4xl px-5 py-12 font-['Roboto']">
      <h1 className="text-center font-['Lobster'] text-4xl text-[#ff7f50]">
        Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <p className="mt-10 text-center text-xl text-slate-100">
          Your cart is empty.
        </p>
      ) : (
        <div className="mt-10 space-y-5">
          {cart.map((item) => (
            <article
              key={item.id}
              className="flex flex-col gap-5 rounded-xl border border-[#ff1493] bg-[#111111] p-5 md:flex-row md:items-center md:justify-between"
            >
              <div>
                <h2 className="font-['Lobster'] text-2xl text-[#ff7f50]">
                  {item.name}
                </h2>

                <p className="mt-2">
                  Price: ${item.price.toFixed(2)}
                </p>

                <p className="mt-1">
                  Item total: ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => changeQuantity(item.id, -1)}
                  className="rounded bg-[#ff1493] px-4 py-2 transition hover:bg-[#ff7f50] hover:text-black"
                  aria-label={`Decrease ${item.name} quantity`}
                >
                  −
                </button>

                <span className="min-w-6 text-center text-lg font-bold">
                  {item.quantity}
                </span>

                <button
                  type="button"
                  onClick={() => changeQuantity(item.id, 1)}
                  className="rounded bg-[#ff1493] px-4 py-2 transition hover:bg-[#ff7f50] hover:text-black"
                  aria-label={`Increase ${item.name} quantity`}
                >
                  +
                </button>

                <button
                  type="button"
                  onClick={() => removeItem(item.id)}
                  className="rounded bg-[#ff1493] px-4 py-2 transition hover:bg-[#ff7f50] hover:text-black"
                >
                  Remove
                </button>
              </div>
            </article>
          ))}

          <p className="pt-5 text-center font-['Lobster'] text-3xl text-[#ff7f50] md:text-right">
            Total: ${total.toFixed(2)}
          </p>

          <div className="flex flex-col justify-end gap-4 pt-3 sm:flex-row">
            <button
              type="button"
              onClick={clearCart}
              className="rounded bg-[#ff1493] px-5 py-3 font-semibold transition hover:bg-[#ff7f50] hover:text-black"
            >
              Clear Cart
            </button>

            <Link
              to="/menu"
              className="rounded bg-[#ff1493] px-5 py-3 text-center font-semibold transition hover:bg-[#ff7f50] hover:text-black"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </main>
  )
}

export default Cart
function MenuCard({ item, onAddToCart }) {
  return (
    <article className="flex flex-col rounded-xl border border-[#ff1493] bg-[#111111] p-6 text-center font-['Roboto']">
      <h3 className="font-['Lobster'] text-2xl text-[#ff7f50]">
        {item.name}
      </h3>

      <p className="mt-4 leading-6 text-slate-100">
        {item.description}
      </p>

      <p className="mt-auto pt-6 text-xl font-bold text-[#ff1493]">
        ${item.price.toFixed(2)}
      </p>

      <button
        type="button"
        onClick={() => onAddToCart(item)}
        className="mt-5 rounded-md bg-[#ff1493] px-4 py-3 font-semibold text-white transition hover:bg-[#ff7f50] hover:text-black"
      >
        Add to Cart
      </button>
    </article>
  )
}

export default MenuCard

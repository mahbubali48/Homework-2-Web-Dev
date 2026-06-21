import Hero from '../components/Hero'
import MenuCard from '../components/MenuCard'
import menuItems from '../data/menuItems'

const categories = [
  'Appetizers',
  'Rice Dishes',
  'Noodle Dishes',
  'Meat Dishes',
]

function Menu({ addToCart }) {
  return (
    <>
      <Hero />

      <main className="px-5 py-12 font-['Roboto']">
        <h1 className="text-center font-['Lobster'] text-4xl text-[#ff7f50]">
          Menu
        </h1>

        <div className="mx-auto mt-10 max-w-4xl">
          {categories.map((category) => {
            const categoryItems = menuItems.filter(
              (item) => item.category === category
            )

            return (
              <section key={category} className="mb-14">
                <h2 className="border-b border-[#ff1493] pb-3 font-['Lobster'] text-3xl text-[#ff7f50]">
                  {category}
                </h2>

                <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                  {categoryItems.map((item) => (
                    <MenuCard
                      key={item.id}
                      item={item}
                      onAddToCart={addToCart}
                    />
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      </main>
    </>
  )
}

export default Menu

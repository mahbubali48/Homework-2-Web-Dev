import Hero from '../components/Hero'
import Gallery from '../components/Gallery'

function Home() {
  return (
    <>
      <Hero />

      <main className="px-5 py-12 text-center font-['Roboto']">
        <h1 className="font-['Lobster'] text-4xl text-[#ff7f50]">
          Home
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-slate-100">
          Welcome to Didi&apos;s Halal Chinese, where authentic Chinese flavors
          meet halal ingredients. Located in Jamaica, Queens, we are proud to
          serve fresh, flavorful dishes in a welcoming environment for
          families, friends, and customers of all backgrounds.
        </p>
      </main>

      <Gallery />
    </>
  )
}

export default Home
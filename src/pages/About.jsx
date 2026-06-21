import Hero from '../components/Hero'

function About() {
  return (
    <>
      <Hero />

      <main className="px-5 py-12 text-center font-['Roboto']">
        <h1 className="font-['Lobster'] text-4xl text-[#ff7f50]">
          About Us
        </h1>

        <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg leading-8 text-slate-100">
          <p>
            Didi&apos;s Halal Chinese is a Bengali-owned restaurant based in
            Jamaica, Queens, focused on serving authentic halal Chinese food.
            Our goal is to bring together traditional Chinese flavors and halal
            ingredients in a way that reflects the diversity of our community.
          </p>

          <p>
            Our mission is to serve food that can be enjoyed by everyone while
            making Chinese cuisine more accessible to Muslim customers. We want
            every guest to feel welcome and confident that their meal is
            prepared with care.
          </p>

          <p>
            Founded in the late 2000s, Didi&apos;s Halal Chinese was among the
            early halal Chinese restaurants serving the community. Since then,
            it has continued to offer familiar favorites with a halal approach.
          </p>

          <p>
            Some of our popular dishes include lo mein, egg foo young, sesame
            chicken, and egg rolls. Each dish is prepared to be flavorful,
            satisfying, and enjoyable for families and customers of all
            backgrounds.
          </p>

          <p>
            At Didi&apos;s Halal Chinese, we are proud to serve our community
            with flavorful food, welcoming service, and dishes that everyone
            can enjoy. We look forward to sharing our love of halal Chinese
            cuisine with every customer who walks through our doors.
          </p>
        </div>
      </main>
    </>
  )
}

export default About
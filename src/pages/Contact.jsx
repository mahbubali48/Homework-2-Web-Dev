import Hero from '../components/Hero'

function Contact() {
  function handleSubmit(event) {
    event.preventDefault()
    alert('Your message was submitted.')
    event.currentTarget.reset()
  }

  return (
    <>
      <Hero />

      <main className="px-5 py-12 font-['Roboto']">
        <h1 className="text-center font-['Lobster'] text-4xl text-[#ff7f50]">
          Contact Us
        </h1>

        <p className="mx-auto mt-5 max-w-3xl text-center text-lg leading-7 text-slate-100">
          Have a question or want to learn more about our restaurant? Send us
          a message or visit us at our Jamaica, Queens location.
        </p>

        <div className="mx-auto mt-10 flex max-w-5xl flex-col gap-10 md:flex-row">
          <section className="w-full md:w-1/2">
            <h2 className="mb-5 text-center font-['Lobster'] text-3xl text-[#ff7f50]">
              Our Location
            </h2>

            <iframe
              src="https://www.google.com/maps?q=83-25%20Parsons%20Blvd%2C%20Jamaica%2C%20NY%2011432&output=embed"
              title="Map showing Didi's Halal Chinese location"
              loading="lazy"
              className="h-[320px] w-full rounded-xl border-2 border-[#ff1493] md:h-[430px]"
            />

            <p className="mt-5 text-center leading-6 text-slate-100">
              83-25 Parsons Blvd
              <br />
              Jamaica, NY 11432
            </p>
          </section>

          <form
            onSubmit={handleSubmit}
            className="w-full rounded-xl border border-[#ff1493] bg-[#111111] p-6 md:w-1/2"
          >
            <h2 className="mb-5 text-center font-['Lobster'] text-3xl text-[#ff7f50]">
              Send Us a Message
            </h2>

            <label
              htmlFor="name"
              className="mb-2 mt-4 block font-bold text-[#ff7f50]"
            >
              Name
            </label>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full rounded-md border border-[#ff1493] bg-zinc-800 p-3 text-white outline-none placeholder:text-zinc-400 focus:ring-2 focus:ring-[#00ffff]"
            />

            <label
              htmlFor="email"
              className="mb-2 mt-4 block font-bold text-[#ff7f50]"
            >
              Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full rounded-md border border-[#ff1493] bg-zinc-800 p-3 text-white outline-none placeholder:text-zinc-400 focus:ring-2 focus:ring-[#00ffff]"
            />

            <label
              htmlFor="message"
              className="mb-2 mt-4 block font-bold text-[#ff7f50]"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              required
              className="min-h-40 w-full resize-y rounded-md border border-[#ff1493] bg-zinc-800 p-3 text-white outline-none placeholder:text-zinc-400 focus:ring-2 focus:ring-[#00ffff]"
            />

            <button
              type="submit"
              className="mt-5 w-full rounded-md bg-[#ff1493] p-3 text-lg font-semibold text-white transition hover:bg-[#ff7f50] hover:text-black"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
    </>
  )
}

export default Contact
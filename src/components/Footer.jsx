function Footer() {
  return (
    <footer className="mt-16 bg-black px-5 py-10 text-center font-['Roboto'] text-white">
      <div className="mb-8">
        <h3 className="font-['Lobster'] text-2xl text-[#ff7f50]">
          Business Hours
        </h3>

        <p className="mt-3">
          Monday–Thursday: 11:00 AM–10:00 PM
        </p>

        <p className="mt-2">
          Friday–Sunday: 11:00 AM–11:00 PM
        </p>
      </div>

      <div>
        <h3 className="font-['Lobster'] text-2xl text-[#ff7f50]">
          Follow Us
        </h3>

        <div className="mt-3 flex justify-center gap-5">
          <a
            href="#"
            className="text-[#ff1493] hover:text-white"
          >
            Facebook
          </a>

          <a
            href="#"
            className="text-[#ff1493] hover:text-white"
          >
            Instagram
          </a>

          <a
            href="#"
            className="text-[#ff1493] hover:text-white"
          >
            TikTok
          </a>
        </div>
      </div>

      <p className="mt-8 text-sm">
        © 2026 Didi&apos;s Halal Chinese
      </p>
    </footer>
  )
}

export default Footer
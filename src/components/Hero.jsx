function Hero() {
  return (
    <section className="flex min-h-[350px] w-full flex-col items-center bg-black md:flex-row">
      <h1 className="m-0 w-full px-[15px] py-[30px] text-center font-['Lobster'] text-5xl leading-none text-[#ff10f0] md:w-1/2 md:py-0 md:pl-[35px] md:pr-0 md:text-left md:text-[80px]">
        Didi&apos;s Halal Chinese
      </h1>

      <div className="relative ml-auto w-full md:w-1/2">
        <img
          src={`${import.meta.env.BASE_URL}hero.webp`}
          alt="Halal Chinese food"
          className="block h-[250px] w-full object-cover md:h-[350px]"
        />

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_left,transparent_60%,black_100%)]" />
      </div>
    </section>
  )
}

export default Hero
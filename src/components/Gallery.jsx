import { useState } from 'react'

const baseUrl = import.meta.env.BASE_URL

const images = [
  `${baseUrl}food1.jpg`,
  `${baseUrl}food2.jpg`,
  `${baseUrl}food3.jpg`,
  `${baseUrl}food4.jpg`,
  `${baseUrl}food5.jpg`,
  `${baseUrl}food6.jpg`,
]

function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0)

  function changeSlide(direction) {
    setCurrentSlide((current) => {
      const nextSlide = current + direction

      if (nextSlide >= images.length) {
        return 0
      }

      if (nextSlide < 0) {
        return images.length - 1
      }

      return nextSlide
    })
  }

  return (
    <section className="px-5 py-14 text-center font-['Roboto']">
      <h2 className="mb-6 font-['Lobster'] text-4xl text-[#ff7f50]">
        Food Gallery
      </h2>

      <div className="relative mx-auto h-[280px] max-w-[700px] md:h-[400px]">
        <button
          type="button"
          onClick={() => changeSlide(-1)}
          className="absolute left-3 top-1/2 z-10 -translate-y-1/2 bg-black/60 px-4 py-3 text-2xl text-white transition hover:bg-[#ff1493]"
          aria-label="Previous image"
        >
          ❮
        </button>

        <img
          src={images[currentSlide]}
          alt={`Restaurant food ${currentSlide + 1}`}
          className="h-full w-full rounded-xl object-cover"
        />

        <button
          type="button"
          onClick={() => changeSlide(1)}
          className="absolute right-3 top-1/2 z-10 -translate-y-1/2 bg-black/60 px-4 py-3 text-2xl text-white transition hover:bg-[#ff1493]"
          aria-label="Next image"
        >
          ❯
        </button>
      </div>
    </section>
  )
}

export default Gallery
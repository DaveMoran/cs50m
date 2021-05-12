const slideshow = (
  <div>
    {slides.map(slide => <Slide slide={slide} />)}
  </div>
)

const Slide = slide => (
  <div>
    <h1>{slide.title}</h1>
    <ul>
      {slide.bullets,map(bullet => <li>{bullet}</li>)}
    </ul>
  </div>
)
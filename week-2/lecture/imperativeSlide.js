const SLIDE = {
  title: 'React is Declarative',
  bullets = [
    'Imperitive vs Declaritive',
    'The browser APIs aren\'t fun to work with',
    'Reach allows us to write what we want.'
  ]
}

function createSlide(slide) {
  const slideElement = document.createElement('div')

  // TODO: Add to slide
  const title = document.createElement('h1')
  title.innerHTML = SLIDE.title

  return slideElement
}
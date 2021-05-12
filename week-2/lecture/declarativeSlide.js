const SLIDE = {
  title: 'React is Declarative',
  bullets =[
    'Imperitive vs Declaritive',
    'The browser APIs aren\'t fun to work with',
    'Reach allows us to write what we want.'
  ]
}

function createSlide(slide) {
  return (
    <Slide>
      <h1>{SLIDE.title}</h1>
      <ul>
        {SLIDE.bullets.map(bullet => <li>{bullet}</li>)}
      </ul>
    </Slide>
  )
}
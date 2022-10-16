import React from 'react'
import Tour from './Tour'

export default function Tours({ tours, removeTour }) {
  return (
    <section>
      <div>
        <h1>Our Tours</h1>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour tour={tour} removeTour={removeTour} key={tour.id} />
        })}
      </div>
    </section>
  )
}

import React, { useState } from 'react'

export default function Tour({ tour, removeTour }) {
    const [readMore, setReadMore] = useState(false)
    return (
        <section className='single-tour'>
            <div>
                <img src={tour.image} alt={tour.name} />
                <h4>{tour.name}</h4>
                <p>
                    {readMore ? tour.info : `${tour.info.substring(0, 200)}...`}
                    <button onClick={() => setReadMore(!readMore)}>{readMore ? 'show less' : 'read more'}</button>
                </p>
                <button className='delete-btn' onClick={() => removeTour(tour.id)}>Delete</button>
            </div>
            <footer>
                <div className='tour-info'>
                </div>
            </footer>
        </section>
    )
}
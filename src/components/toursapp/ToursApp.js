import React, { useState, useEffect } from 'react'
import Tour from './Tour'
import TourLoading from './TourLoading'
import Tours from './Tours'
import './ToursApp.css'

const url = 'https://course-api.com/react-tours-project'

export default function ToursApp() {
    const [loading, setLoading] = useState(true)
    const [tours, setTours] = useState([])

    function removeTour(tourId) {
        const newTours = tours.filter((tour) => tourId !== tour.id)
        setTours(newTours)
    }

    const fetchTours = async () => {
        try {
            setLoading(true)
            const response = await fetch(url)
            const tours = await response.json()
            console.log(tours)
            setTours(tours)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    useEffect(() => { fetchTours() }, [])

    if (loading) {
        return (
            <>
                <TourLoading />
            </>
        );
    }
    if (tours.length === 0) {
        return (
            <>
                <h1>No Tours left</h1>
                <button className='btn' onClick={() => fetchTours()}>refresh</button>
            </>
        );
    }
    return (
        <>
            <Tours tours={tours} removeTour={removeTour} />
        </>
    );

    // return (
    //     tours.map ((tour)=>{
    //         return <Tour {tour}/>
    //     })
    // );

    // return (
    //     tours.map ((tour) => {
    //         const {id, name, info, image, price } = tour;
    //         return (
    //                 <div className='single-tour'>
    //                     <h4>{tour.name}</h4>
    //                     <img src={image} alt={name} className='img'/>
    //                     <p className='tour-info'>{info}</p>
    //                     <button className='delete-btn'>Remove</button>
    //                 </div>
    //         );
    //     })
    // );    
}

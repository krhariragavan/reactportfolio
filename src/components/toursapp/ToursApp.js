import React, {useState, useEffect} from 'react'

const url = 'https://course-api.com/react-tours-project'

export default function ToursApp() {
    const[loading, setLoading] = useState(true)
    const[tours, setTours] = useState([])

    const fetchTours = async() => {
        setLoading (true)
        const response = await fetch(url)
        const tours = await response.json()
        console.log (tours)        
        setTours (tours)
    }

    useEffect (()=>{fetchTours()}, [])    

    
    return (
        tours.map ((tour) => {
            const {id, name, info } = tour;
            return (
                <div>
                    <p>{tour.name}</p>
                </div>
            );
        })
    );
    // tours.map ((tour)=>{
    //     const{id, name, info} = tour;
    //     console.log(tour.name)
    //     return (
    //         <div>
    //             <p>Tour {tour.id}</p>
    //             <h1>Test</h1>
    //         </div>
    //     );
    // })
    // return (
    //     <div>
    //         <p>{tour.id}</p>
    //     </div>
    // )
}

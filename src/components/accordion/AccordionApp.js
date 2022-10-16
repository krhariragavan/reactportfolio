import React, { useState, useEffect } from 'react'
import './AccordionApp.css'
import AccordionSingle from './AccordionSingle'

export default function AccordionApp() {
    const url = 'https://course-api.com/react-tours-project'
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    const fetchData = () => {
        setLoading(true)
        fetch(url)
            .then((response) => response.json())
            .then((data) => setData(data))
            .then(() => console.log(data))
            .catch((error) => console.log(error))
            .then(() => setLoading(false))
    }

    useEffect(() => { fetchData() }, [])

    if (loading) {
        return (
            <h1>loading...</h1>
        );
    }
    return (
        data.map((person) => {
            // const { id, name, info, image } = person
            return <AccordionSingle id={person.id} info={person.info} image={person.image} name={person.name} />
        })
    )
    // return (
    //     // <section className='section'>
    //     < div className='question' >
    //         <h4>{data[0].name}</h4>
    //         <p>{data[0].info}</p>
    //         <button className='btn'>+</button>
    //     </div >
    //     // </section >
    // )
}

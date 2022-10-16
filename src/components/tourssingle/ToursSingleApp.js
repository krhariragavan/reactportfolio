import React, { useState, useEffect } from 'react'

const url = 'https://course-api.com/react-tours-project'

export default function ToursSingleApp() {
    const [data, setData] = useState([])
    const [index, setIndex] = useState(0)
    const [loading, setLoading] = useState(true)

    const fetchData = () => {
        setLoading(true)
        fetch(url)
            .then((response) => response.json())
            .then((data) => setData(data))
            .then(() => console.log(data))
            .catch((error) => console.log(error))
            .then(() => setLoading(false))
    }

    // const fetchData = async () => {
    //     const response = await fetch(url)
    //     const data = await response.json()
    //     setData(data)
    // }

    useEffect(() => { fetchData() }, [])

    const next = () => {
        if (index === data.length - 1) {
            setIndex(0)
        }
        else {
            setIndex((preval) => preval + 1)
        }
    }

    const previous = () => {
        if (index === 0) {
            setIndex(data.length - 1)
        }
        else {
            setIndex((preval) => preval - 1)
        }
    }

    if (loading) {
        return (
            <div>
                <h1>loading...</h1>
            </div>
        );
    }

    const { id, name, info, image } = data[index]

    return (
        <section>
            <div>
                <img src={image} />
                <h4>{name}</h4>
                <p>{data[index].info}</p>
                <button onClick={() => previous()}>Previous</button>
                <button onClick={() => next()}>Next</button>
            </div>
        </section>
    );
}

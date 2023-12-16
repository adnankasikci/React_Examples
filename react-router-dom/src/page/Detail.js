import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import arr from '../Data'

const Detail = () => {
    const { id } = useParams()
    const [data, setData] = useState([])

    useEffect(() => {
        setData(arr)
        arr.filter(ar => ar.id == id)
    }, [id])

    const redirectFunc = () => {
        window.location = "/"
    }

    return (
        <>
            <button onClick={redirectFunc}>Yönlendir</button>
            {
                data.filter(dt => dt.id == id).map((dat, i) => (
                    <div key={i}>{dat.name}</div>
                ))
            }
        </>
    )
}

export default Detail

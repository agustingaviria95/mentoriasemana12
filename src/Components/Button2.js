import React, { useEffect, useState } from 'react'; 

export const Button2 = () => {
    const [dataAPI, setDataAPI] = useState([])
    useEffect(() => {
        fetch('https://swapi.dev/api/').then(response => response.json()).then(data => {
            setDataAPI(data)
    })
    },[] )

    return (
        <button onClick={() => setDataAPI (console.log([dataAPI]))} >
            Mostrar
        </button>
    )
}
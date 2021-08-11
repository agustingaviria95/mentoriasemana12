import React, { useState } from 'react'; 

export const Button3 = () =>{
    const [ plus, setPlus ] = useState(0)

    return (
        <div>
            <button onClick={()=> setPlus(plus + 1)}>
                Sumar 
            </button>
            <button onClick={()=> setPlus(plus - 1)}>
                Restar
            </button>
            <h4>{plus}</h4>
        </div>
    )
}
import { useEffect, useState } from "react";
export const InfoApi=()=> {
     const API='https://swapi.dev/api/';
     const [dataAPI, setDataAPI]= useState(null);
    useEffect(()=>{
        fetch(API).then(response => response.json())
        .then(data => {
         console.log(data.results); 
         console.log(data);
        setDataAPI(data)
    }) 
    return dataAPI;
}, []);  
}
import { useEffect, useState } from "react";

export const GetData=(name)=>{
    const API='https://swapi.dev/api/people/?search=' + name;
    const [dataApi, setDataApi] = useState(null)


    useEffect(()=>{
        fetch(API).then(response => response.json()).then(data => {
            console.log(data);
    
            console.log(data.results);
            setDataApi(data);
        })
        

    },[])
    return dataApi;

}
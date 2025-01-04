import { useEffect, useState } from "react";
export function useGetAPI(url){
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch(url)
        .then(response => response.json())
        .then(collection=>{
            setData(collection)
        })
    }, [url]);
    return data;
}
import axios from "axios";
import { useState, useEffect } from "react";
export default function useFetchData(url){

    const [data,setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const fetchData= async () =>{
        try {
            const {data} = await axios.get(url)
            setData(data)
            setLoading(false)
            
        } catch (error) {
            setError(true)
        }
    }


    
    useEffect(()=>{
        fetchData()
    })

    return {data,loading,error}
 

}
import { useState, useEffect } from "react";

const useFetch = () => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        setTimeout(()=>{
            fetch('http://localhost:8000/blogss')
                .then(res =>{
                    if(!res.ok){
                        throw Error('Could not fetch the data for that resource');
                    }
                    return res.json();
                })
                .then(data =>{
                    setData(data)
                    setIsPending(false);
                    setError(null);
                })
                .catch(err =>{
                    setIsPending(false);
                    setError(err.message);
                });
        }, 1000);

    },[]);

    return {data, isPending, error};
}
 
export default useFetch;
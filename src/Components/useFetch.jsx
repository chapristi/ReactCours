import React, { useState } from 'react';
const useFetch = (url) =>{
    const [data,setData] = useState([]);
    const [isPending,setIsPending] = useState(true)
    const [error,setError] = useState(null)
    React.useEffect(()=>{
        // try to see later new AbortController(); const abortCont = new AbortController();
        fetch(url)
            .then(res=> {
                if (!res.ok){
                    throw Error("could not fetch the data for that resource")
                }
                return res.json()
            })
            .then(data =>{
                console.log(data);
                setData(data['hydra:member']);
                setIsPending(false);
                setError(null);
            })
            .catch(err =>{
                setIsPending(false);
                setError(err.message);
            })

    },[url]);
    //here we return 3 values because its the logic of hook
    //but we can also return string value...
    return {data,isPending,error}
}

export default useFetch;

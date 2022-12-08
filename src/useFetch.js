import { useState, useEffect } from 'react'
// import BlogList from './BlogList';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        setTimeout(()=> { 
        fetch(url)
            .then((response)=>{
                if(!response.ok) {
                    throw new Error('Not found data')
                }
                    return response.json()
                }).then((data)=>{
                    setData(data)
                    setIsPending(false)
                    setError(null)
                }).catch((e)=> {
                    setError(e.message)
                    setIsPending(false)
                }
            )
        },500)
    },[url]);

return { data, isPending, error}
}

export default useFetch
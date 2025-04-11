import React, { useEffect, useState } from 'react'

const useCustomFetch = (url) => {
    const [data, setData]=useState(null);
    const [data2, setData2]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);


    useEffect(()=>{
        if(!url) return;
        
        const fetchData= async()=>{
            try{
                const response=await fetch(url);
                if(!response.ok)
                {
                    throw new Error("RESPONSE NOT OKAY");
                }
                const result = await response.json();
                setData(result.results[0]);
                setData2(result);

            }
            catch(err){
                setError(err.message);
                
            } finally{
                setLoading(false);
            }
        };

        fetchData();
    },[url]);


  return {data,data2, loading, error}
}

export default useCustomFetch
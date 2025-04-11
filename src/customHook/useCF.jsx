import React, { useEffect, useRef, useState } from "react";

const useCF = (url) => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [apiData, setApiData] = useState();


    const resultRef = useRef(null);


    useEffect(() => {
        if (!url) return;

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("URL/API CORRUPT")
                }
                else {
                   const  result = await response.json();
                    resultRef.current = result;

                    await new Promise((resolve) => setTimeout(resolve,2500))
                    
                    setApiData(result);
                    
                }
            } catch (e) {
                // console.error(e.message);
                setError(e.message);


            }
            finally {
                setLoading(false);
            }

        }

        fetchData();



    }, [url]);

    return { apiData, loading, error }

}
export default useCF;

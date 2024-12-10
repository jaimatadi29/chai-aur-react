import React, {useState, useEffect} from 'react'

function CurrencyCustomHook(currency) {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((response) => {
            return response.json()
        })
        .then((res) => setData(res[currency]));  
    }, [currency]);
    console.log(data);
    
    return data;
}

export default CurrencyCustomHook

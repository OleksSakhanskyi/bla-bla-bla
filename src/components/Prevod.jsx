import { useState,useEffect } from 'react'

export const Prevod = () => {
    const [cislo,setCislo] = useState(0);
    const [kurzy,setKurzy] = useState([]);

const getKurzy = async () => {
    try {
        const response = await fetch("https://api.frankfurter.dev/v1/latest?base=EUR")
        const data = await response.json();
        setKurzy(data.rates);
    } catch(error){
        console.log(error);
    }
};

useEffect(() => {
    getKurzy();
},[]);

    return(
      <div>
        <h1>
            Prevod EUR do jine meny
        </h1>
        <div>
            <input
                type="number"
                value={cislo}
                onChange={(e)=>setCislo(e.target.value)}
                style={{ padding: '5px'}} 
            />
            <select>
                {kurzy &&
                    Object.entries(kurzy).map(([key,value]) => {
                        <option value={value}>{key}</option>
                    })
                }
            </select>
            <button onClick={() => setKurzy()} id="button">Preved</button>
            </div>
      </div>
    )
}
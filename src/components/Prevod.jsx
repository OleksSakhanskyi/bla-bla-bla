import { useState } from 'react'

export const Prevod = () => {
    const [cislo,setCislo] = useState(0);
    const [prevod,setPrevod] = useState(0);
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
            <select></select>
            <button onClick={() => setPrevod()} id="button">Preved</button>
            </div>
      </div>
    )
}
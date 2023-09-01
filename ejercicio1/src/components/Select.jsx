import React from "react";

function Select({idioma1,idioma2}){
return(
    <div>
        <select name="idioma">
            <option value={idioma1}>{idioma1}</option>
            <option value={idioma2}>{idioma2}</option>
            
        </select>       
    </div>
)

}

export default Select;
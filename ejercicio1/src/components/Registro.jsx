import React,{useState} from "react";
import {evaluate} from "mathjs";

function Registro(){

    const [descuento, setDescuento] = useState(null);
    const [inputDato, setInputDato] = useState('');

    const calcularDescuento = () => {

        const valor = 25*0.1;
        
        if(!inputDato){
            alert ('El valor no puede estar vacio');
        }
        else{
            if(inputDato == 1){
                descuento = 0;
            }
            if(2<=inputDato<=3 ){
                descuento = 25*0.1 - inputDato;
            }
            
        }

        
    }

    const handleInputChange = (event) => {
        setInputDato(event.target.value);
    }
    
    return(
        <>
            <div>
                <input type="text" name="mese" onChange={handleInputChange} ></input>
                <button onClick={calcularDescuento}>Calcular Descuento</button>
                <p>Descuento Total: {descuento} </p>
                
            </div>
        </>
    );
}

export default Registro;
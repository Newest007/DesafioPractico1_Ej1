import React,{useState} from "react";
import {evaluate} from "mathjs";

function Registro(){

    const [descuento, setDescuento] = useState('');
    const [inputDato, setInputDato] = useState('');

    const calcularDescuento = () => {
        
        const calculo = 0;

        if(!inputDato){
            alert ('El valor no puede estar vacio');
        }
        else{
            if(inputDato == 1){
                setDescuento(calculo);
            }
            if( 2<=inputDato<=3 ){
                calculo = 25*0.1 - inputDato; 
                setDescuento(calculo);
            }
            
        }

        
    }

    const handleInputChange = (event) => {
        setInputDato(event.target.value);
    }
    
    return(
        <>
            <div>
                <input type="number" name="mese" onChange={handleInputChange} ></input>
                <button onClick={()=>calcularDescuento()}>Calcular Descuento</button>
                <p>Descuento Total: {descuento} </p>
                
            </div>
        </>
    );
}

export default Registro;
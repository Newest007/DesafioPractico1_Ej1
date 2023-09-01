import React,{useState} from "react";

function Registro(){

    const [datos, setDatos] = useState(null);

    const registrarDatos = () => {
        const datosGuardados = datos;
    }

    const handleInputChange = (event) => {
        setDatos(event.target.value);
    }
    
    return(
        <>
            <div>
                <input type="text" value={datos} onChange={handleInputChange}></input>
                <button onClick={registrarDatos}>Guardar Datos</button>
                <p>Datos Guardados: {datos} </p>
                
            </div>
        </>
    );
}

export default Registro;
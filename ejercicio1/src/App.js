import logo from './logo.svg';
import Input from './components/Input';
import Inputmes from './components/Input-meses';
import Select from './components/Select';
import Registro from './components/Registro';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <div className='principal'>
      <p className='titulo'>Bienvenido A La Academia UDB</p>
        <p>Ingrese su Nombre</p>
        <Input />
        <p>Ingrese su Apellido</p>
        <Input />        
        <p>Seleccione el tipo de curso a tomar</p>
        <Select 
        idioma1='ingles'
        idioma2='frances'
        />
        <p>Ingrese la cantidad de meses a pagar</p>
        <Inputmes />
      </div>
     
    </div>
  );
}

export default App;

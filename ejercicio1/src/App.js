import logo from './logo.svg';
import Input from './components/Input';
import Select from './components/Select';
import './App.css';

function App() {
  return (
    <div className="App">
     <p>Ingrese su nombre</p>
     <Input />
     <p>Ingrese su Apellido</p>
     <Input />
     <p>Ingrese su nombre</p>
     <Input />
     <p>Seleccione el tipo de curso a tomar</p>
     <Select 
     idioma1='ingles'
     idioma2='frances'
     />
    </div>
  );
}

export default App;

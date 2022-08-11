import {BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css';
import Barra from './componentes/Barra';
import RegistrarPersona from './componentes/RegistrarPersona';
import VerPersonas from './componentes/VerPersonas'
import Index from './componentes/Index'
import ErrorRadios from './componentes/SeleccionaOficina';




function App() {
  return (

    <Router>

    <Barra/>

   <Route path='/' exact component={Index}/>
   <Route path='/registrarPersona' exact component={RegistrarPersona}/>
   <Route path='/verPersonas' exact component={VerPersonas}/>
   <Route path='/seleccionar-oficina' exact component={ErrorRadios}/>


    </Router>


   
  );
}

export default App;

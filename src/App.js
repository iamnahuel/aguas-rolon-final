import React, { useState } from 'react';
import Login from './componentes/Login';
import Perfil from './componentes/Perfil';
import Registrarse from './componentes/Registrarse';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
function App() {

const[conectado, setConectado] = useState(false);
const acceder = (estado)=>{
  setConectado(estado)
}
  return (
    <Router>
    conectado ? <Perfil /> : <Login acceder={acceder} />
    <Switch>
    <Route  path="/" exact>
        <Login />
      </Route>
      <Route path="/registrarse" exact>
        <Registrarse />
      </Route>
    </Switch>
    </Router>
  );
}

export default App;

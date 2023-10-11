import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createHashHistory } from 'history';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Header from './components/Header/Header';  
// import Footer from './components/Footer/Footer';

import Home from './components/Home/Home';
// import Projeto from './components/Projeto/Projeto';
// import Perguntas from './components/Perguntas/Perguntas'; 
// import Grupo from './components/Grupo/Grupo';
// import Contatos from './components/Contatos/Contatos';
// import Login from './components/LoginCadastro/Login';
// import Cadastro from './components/LoginCadastro/Cadastro';
// import Consulta from './components/Consulta/Consulta';
// import Apoio from './components/Apoio/Apoio';

const hashHistory = createHashHistory();

function App() {
  return (
    <Router history={hashHistory}>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/projeto" component={Projeto} />
        <Route path="/perguntas" component={Perguntas} />
        <Route path="/grupo" component={Grupo} />
        <Route path="/contatos" component={Contatos} />
        <Route path="/login" component={Login} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/consulta" component={Consulta} />
        <Route path="/apoio" component={Apoio} /> */}
      </Switch>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header';  
import Footer from './components/Footer/Footer';

import Home from './components/Home/Home';
import Apoio from './components/Apoio/Apoio';
import Login from './components/Login/Login';
import Cadastro from './components/Cadastro/Cadastro';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/apoio" component={Apoio} />
        <Route path="/login" component={Login} />
        <Route path="/cadastro" component={Cadastro} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

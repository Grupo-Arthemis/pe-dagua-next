import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header';  
import Footer from './components/Footer/Footer';

import Home from './components/Home/Home';
import Apoio from './components/Apoio/Apoio';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/apoio" component={Apoio} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

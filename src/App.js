import React from 'react';
import Home from './Home';
import Catalogue from './Catalogue';
import './App';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/catalogue" component={Catalogue} />
      </Switch>
    </>
  );
}

export default App;
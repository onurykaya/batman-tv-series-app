import React from 'react';
import './App.scss';
import Header from './components/Header';
import Main from './pages/Main';
import Detail from './pages/Detail';
import { Route, Switch } from "react-router-dom";
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/detail/:id" component={Detail} />
        <Route  path="" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;

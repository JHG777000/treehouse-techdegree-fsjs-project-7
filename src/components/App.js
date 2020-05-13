import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import Main from './Main';
import NavSearch from './NavSearch';
import PageNotFound from './PageNotFound';

//Main switch for the App, manages and sets up routes

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Redirect to="/sunsets" />
          </Route>
          <Route exact path="/sunsets">
            <Main query="Sunsets" />
          </Route>
          <Route exact path="/fall">
            <Main query="Fall" />
          </Route>
          <Route exact path="/desert">
            <Main query="Desert" />
          </Route>
          <Route exact path="/:nav" component={NavSearch} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

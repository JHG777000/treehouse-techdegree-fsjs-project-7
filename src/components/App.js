import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import Main from './Main';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route exact path="/">
           <Redirect to="/sunsets" />
          </Route>  
          <Route exact path="/sunsets">
           <Main query="sunsets" />
          </Route>
          <Route exact path="/fall">
           <Main query="fall" />
          </Route>
          <Route exact path="/desert">
           <Main query="desert" />
          </Route>
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

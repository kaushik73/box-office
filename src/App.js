import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Navs from './components/Navs';
import Home from './pages/Home';
import Starred from './pages/Starred';
// exat <=> exact ={true};
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/starred">
          <Starred />
        </Route>

        <Route>
          <h1 style={{ textAlign: 'center', padding: '50px' }}>
            This is .404 page
          </h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

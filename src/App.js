import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EmployeesView from './EmployeesView'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <EmployeesView />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;

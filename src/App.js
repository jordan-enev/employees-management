import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EmployeesView from './EmployeesView'
import EmployeeCreate from './EmployeeCreate'
import EmployeeEdit from './EmployeeEdit'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <EmployeesView />
        </Route>
        <Route path='/employee/create'>
          <EmployeeCreate />
        </Route>
        <Route path='/employee/:id'>
          <EmployeeEdit />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;

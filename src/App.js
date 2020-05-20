import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navbar from './components/Navbar';
import EmployeesView from './routes/Employee/EmployeesView';
import EmployeeCreate from './routes/Employee/EmployeeCreate';
import EmployeeEdit from './routes/Employee/EmployeeEdit';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Container>
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
        </Container>
      </Router>
    </>
  );
}

export default App;

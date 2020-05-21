import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import ReactNotification from 'react-notifications-component';
import Navbar from './components/Navbar';
import EmployeesView from './routes/Employee/EmployeesView';
import EmployeeCreate from './routes/Employee/EmployeeCreate';
import EmployeeEdit from './routes/Employee/EmployeeEdit';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications-component/dist/theme.css';
import 'animate.css/animate.min.css';

function App() {
  return (
    <>
      <ReactNotification />
      <Router>
        <Navbar />
        <Container className='my-4'>
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

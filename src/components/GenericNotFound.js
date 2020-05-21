import React from 'react';
import { Link } from 'react-router-dom';
import { Alert, Button } from 'react-bootstrap';

function GenericNotFound() {
  return <>
    <Alert variant='danger'>
      <Alert.Heading>404 Page Not Found</Alert.Heading>
      <p>The page you're after no longer exists here.</p>
      <p>Check out the <span className='font-weight-bold'>homepage</span> instead, it's usually nicer than this page.</p>
    </Alert>
    <div className='text-center'>
      <Link to='/'>
        <Button>Homepage</Button>
      </Link>
    </div>
  </>;
}

export default GenericNotFound;

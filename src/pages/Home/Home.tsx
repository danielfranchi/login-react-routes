import React from 'react';
import { Helmet } from 'react-helmet'
import Form from '../../components/Form/Form';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>

      <Form />
      
    </>
  );
}

export default Home;
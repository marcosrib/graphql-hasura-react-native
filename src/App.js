/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './services/apiGraphql'
import Form from './page/form'

function App() {
  return (
    <ApolloProvider client={client}>
      <Form />
    </ApolloProvider>
  );
};



export default App;

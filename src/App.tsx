import React from 'react';
import { Outlet } from 'react-router-dom';
import GlobalStyle from 'GlobalStyle';
import { Layout } from 'style/Layout';

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
}

export default App;

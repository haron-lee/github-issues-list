import React from 'react';
import { Outlet } from 'react-router-dom';
import GlobalStyle from 'GlobalStyle';
import { Layout } from 'style/Layout';
import Header from 'components/Header';

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Header />
        <Outlet />
      </Layout>
    </>
  );
}

export default App;

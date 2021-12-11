import React from 'react';
import Head from 'next/head';
import { Fragment } from 'react-transition-group/node_modules/@types/react';

function Layout(porps) {
  return (
    <React.Fragment>
      <Head>
        <title>chatting</title>
      </Head>
      {porps.children}
    </React.Fragment>
  )
}

export default Layout;
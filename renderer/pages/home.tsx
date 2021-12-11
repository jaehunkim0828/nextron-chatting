import React from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';

import Layout from '../components/Layout';
import Router, { useRouter } from 'next/router';
import { Link } from '@material-ui/core';
import Head from 'next/head';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
      paddingTop: theme.spacing(4),
    },
  })
);

function Home() {
  const router = useRouter();
  const classes = useStyles({});

  return (
    <React.Fragment>
      <Head>
        <title>chatting</title>
      </Head>
      <div className="home">
        <div className="home-container">
          <div className='logo'>
            <img src='/images/logo.png' alt='none'/>
            <div>빠르고 간편한 실시간 채팅 웹 </div>
          </div>
          <div className="button-container">
            <button className='home-button' onMouseDown={() => router.push('/login')}>로그인</button>
            <button className='home-button' onMouseDown={() => router.push('/register')}>회원가입</button>
          </div>
        </div>
      </div>
    </React.Fragment>
    
    
  );
};

export default Home;

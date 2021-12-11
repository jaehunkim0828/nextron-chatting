import  Link  from "next/link";
import React, { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";

import { auth, db } from "../services/firebase";
import Layout from "../components/Layout";
import Head from "next/head";


function Login() {
  type LOGIN = { email: string, password: string, };
  
  const router = useRouter();
  const [data, setDate] = useState<LOGIN>({ email: '', password: '',});

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target; 
    setDate({
      ...data, 
      [name]: value 
    });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let name: string;
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then( async(userCredential) => {
        const token = userCredential.user.uid;
        localStorage.setItem('token', token);
        const querySnapshot = await getDocs(collection(db, "users"));
          querySnapshot.forEach((user) => {
            if (data.email === user.data().email) {
              name = user.data().name;
              localStorage.setItem('name', name);
              return router.push('/main');
            }
        });
      })
      .catch(err => {
        window.alert('아이디 비밀번호를 확인해주세요.');
      })
      
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token);
    if (token) {
      router.push('/main');
    }
  },[])

  return (
  <React.Fragment>
    <Head>
      <title>chatting</title> 
    </Head>  
    <div className="login">
      <div className="login-left">
        <img src='/images/smallLogo.png' alt='login-logo'/>
        <div className="login-left-content">
          <p>Sign In</p>
          <div>오늘도 친구와 Chat App 에서 채팅을 시작하세요</div>
          <div>쉽고 편리한 대화를 위한 실시간 채팅 소프트웨어</div>
        </div>
      </div>
      <div className="login-right">
        <img src='/images/loginLogo.png' alt='right-logo' />
        <form onSubmit={onSubmit}>
          <div className="login-input-container">
            <div className='input-name'>이메일 </div>
            <input  placeholder='Email' value={data.email} name='email' type='email' onChange={onChange} /> 
          </div>
          <div className="login-input-container">
            <div className='input-name'>비밀번호 </div>
            <input placeholder='Password' value={data.password} name='password' type='password' onChange={onChange}/>
          </div>
          <button className="home-button width" type="submit">로그인</button> 
        </form>
        <Link href='/register'><a>아이디가 없다면...</a></Link>
      </div>
    </div>
  </React.Fragment>
  )
}

export default Login;
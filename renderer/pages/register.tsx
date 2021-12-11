import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, getDocs, doc } from "firebase/firestore";

import { auth, db } from '../services/firebase';
import Link from 'next/link';
import Layout from "../components/Layout";
import Head from "next/head";

function Register () {
  type REGISTER = { email: string, password: string, name: string, pwCheck: string, };
  
  const router = useRouter();
  const [user, setUser] = useState<REGISTER>({
    email: '',
    password: '',
    name: '',
    pwCheck: '',
  });


  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target; 
    setUser({
      ...user, 
      [name]: value 
    });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let name;
    let email;
    if (user.password !== user.pwCheck) {
      return window.alert('비밀번호가 다릅니다.');
    }
    if (user.email === '' || user.password === '' || user.name === '') {
      return window.alert('빈틈없이 작성해주십시오.');
    }
    if (user.password.length < 6) {
      return window.alert('비밀번호는 최소 6자 이상 입니다.');
    }

    const docRef = collection(db, "users");
    const querySnapshot = await getDocs(docRef);
      querySnapshot.forEach((doc) => {
        name = doc.data().name;
        email = doc.data().email;
    });
    if (name === user.name) {
      return window.alert('이미 이름이 있습니다.');
    }

    if (email === user.email) {
      return window.alert('이미 이메일이 있습니다.')
    }
    else {
      router.push('/home');
      await createUserWithEmailAndPassword(auth, user.email, user.password);
      await addDoc(collection(db, 'users'), {
        email: user.email,
        name: user.name,
      })

      return window.alert('회원가입 성공');
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token);
    if (token) {
      router.push('/main');
    }
  }, [])


  return (
    <React.Fragment>
      <Head>
        <title>chatting</title>
      </Head>
      <div className="login">
        <div className="login-left">
          <img src='/images/smallLogo.png' alt='login-logo'/>
          <div className="login-left-content">
            <p>Sign Up</p>
            <div>Chat App은 실시간 채팅 기반 커뮤니케이션 플랫폼입니다.</div>
            <div>언제든 원하는 시간 편안한 장소에서 친구와 소통하세요.</div>
            <div>당신이 쉬어갈 수 있는 공간 소통할 수 있는 공간 Chat App</div>
          </div>
        </div>
        <div className="register-right">
          <form
            onSubmit={onSubmit}
          >
            <img src='/images/loginLogo.png' alt='right-logo' />
            <div className="register-input-container">
              <div className="input-name">이메일 </div>
              <input placeholder='Enter Email' type='email' value={user.email} name='email' onChange={onChange}/>
            </div>
            <div className="register-input-container">
              <div className="input-name">비밀번호 </div>
              <input placeholder='Enter Password' type='password' value={user.password} name='password' onChange={onChange}/>
            </div>
            <div className="register-input-container">
              <div className="input-name">비밀번호 확인 </div>
              <input placeholder='Check Password' type='password' value={user.pwCheck} name='pwCheck' onChange={onChange}/>
            </div>
            <div className="register-input-container">
              <div className="input-name">이름 </div>
              <input placeholder='Enter Username' type='name' value={user.name} name='name' onChange={onChange}/>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between'}}>
              <button className="home-button width margin" type='submit'>회원가입</button>
            </div>
          </form>
          <Link href='/login'><a className="input-link">이미 아이디가 있다면...</a></Link>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Register;
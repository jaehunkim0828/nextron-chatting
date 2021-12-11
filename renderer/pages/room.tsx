import React, { useEffect, useState } from 'react';

import { db } from '../services/firebase';
import { useSelector } from "react-redux";
import SpeechBubble from '../components/SpeechBubble';
// import GroupMmodal from '../components/GroupModal';
import { query, addDoc,orderBy, collection, onSnapshot } from '@firebase/firestore';
import { getDocs } from 'firebase/firestore';
import router from 'next/router';
import GroupMmodal from '../components/GroupModal';


function Room() {
  const [ms, setMs] = useState<any[]>([]);
  const [text, setText] =useState('');
  const [groupChat, setGroupChat] = useState(false);
  const [sent, Settsent] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setText(value);
  }

  const modal = () => {
    setGroupChat(true);
  };

  const onSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = localStorage.getItem('name');
    const sent = localStorage.getItem('sent');

    const time = new Date().getTime();
    const obj = { user, time, text, sent };
    setMs([obj, ...ms]);
    const docRef = collection(db, 'messages');
    await addDoc(docRef, obj);
    setText('');
  }

  const logout = () => {
    localStorage.clear();
    router.push('/home');
  }

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      window.alert('로그인을 해주세요.');
      router.push('/home');
      return;
    }
    const getMs = async() => {
      const docRef = collection(db, 'messages');
      const q = query(docRef, orderBy('time', 'desc'));
      onSnapshot(q, doc => {
        const listMs: React.SetStateAction<any[]> = [];
        const user = localStorage.getItem('name');
        const sent = localStorage.getItem('sent');
        Settsent(sent);
        doc.forEach( doc => {
          if (doc.data().user === user && doc.data().sent === sent) {
            listMs.push(doc.data());
          }
          if (doc.data().user === sent && doc.data().sent === user) {
            listMs.push(doc.data());
          }
        })
        setMs(listMs);
      })
    }
    getMs();
  },[]);

  return (
    <div className='main'>
      <nav>
        <img src='/images/smallLogo.png' alt='nav-logo'/>
        <button className='sign-out' onClick={logout}>Sign Out</button>
      </nav>
      <form
        onSubmit={onSubmit}
        className='room-main-container'
      >
        <div className='room-nav'>
          <img onClick={() => router.push('/main')} src='/images/back.png' alt='back'  style={{ width: '2rem', height: '2rem', cursor: 'pointer'}}/>
          <div>
            <img src='/images/main-rabbit.png' alt='rabbit' style={{ width: '3rem', height: '2rem'}} />
            <div>{sent}</div>
          </div>
          <img onClick={modal} src='/images/plus.png' alt='plus' style={{cursor: 'pointer'}}/>
        </div>
        <div className='room-main'>
          {ms.map( ({user, text}) => (
            <SpeechBubble user={user} text={text} me={user === localStorage.getItem('name') ? true : false}/>
          ))}
        </div>
        <div style={{display: 'flex'}}>
          <input className='input-text' onChange={onChange} value={text}/>
          <button className='button-text'type='submit'>보내기</button>
        </div>
      </form>
      {groupChat && <GroupMmodal sent={sent} setGroupChat={setGroupChat}/>}
    </div>
  )
}

export default Room;
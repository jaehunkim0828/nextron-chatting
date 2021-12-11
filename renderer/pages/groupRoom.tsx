import React, { useEffect, useState } from 'react';

import { db } from '../services/firebase';
import SpeechBubble from '../components/SpeechBubble';
import { addDoc, collection, getDocs, orderBy, query, onSnapshot } from 'firebase/firestore';
import router from 'next/router';


function GroupRoom() {
  const [name, setName] = useState('');
  const [ms, setMs] = useState<any[]>([]);
  const [text, setText] =useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setText(value);
  }

  type Group = { name: string, crew: string[] };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const time = new Date().getTime();
    const group: Group = JSON.parse(localStorage.getItem('group'));
    const me = localStorage.getItem('name');

    const obj = { user: me, time, text, crew: group.crew };
    setMs([obj, ...ms]);
    addDoc(collection(db, 'group'), obj);
    setText('');
  }

  const getGroupMs = async() => {
    setName(JSON.parse(localStorage.getItem('group')).name);

    if (!localStorage.getItem('token')) {
      window.alert('로그인을 해주세요.');
      return router.push('/home');
    }
    const group: Group = JSON.parse(localStorage.getItem('group'));
    const docRef = collection(db, 'group');
    const q = query(docRef, orderBy('time', 'desc'));
    onSnapshot(q, doc => {
      const listMs: React.SetStateAction<any[]> = [];
      doc.forEach(doc => {
        const crewItem = doc.data().crew.sort();
        if (group.crew.toString() === crewItem.toString()) {
          listMs.push(doc.data());
        }
      })
      setMs(listMs);
    })
    // const querySnapshot = getDocs(q);
    // (await querySnapshot).forEach(doc => {
    //   const crewItem = doc.data().crew.sort();
    //       if (group.crew.toString() === crewItem.toString()) {
    //         listMs.push(doc.data());
    //       }
    // })
  }

  const logout = () => {
    localStorage.clear();
    router.push('/home');
  }

  useEffect(() => {
    getGroupMs();
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
            <div>{name}</div>
          </div>
          <div></div>
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
    </div>
  )
}

export default GroupRoom;
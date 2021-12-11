import React, { useEffect, useState } from "react";
import Lists from '../components/List';
import Layout from '../components/Layout';
import { db } from '../services/firebase';
import Group from "../components/Group";
import { collection, getDocs } from "@firebase/firestore";
import router from "next/router";

function Main() {
  const [userList, setUserList] = useState<Array<string>>([]);
  const [isGroup, setIsGroup] = useState(false);
  const [name, setName] = useState('');

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    router.push('/home');
  }

  const goRoom = async (sent: string) => {
    localStorage.setItem('sent', sent);
    router.push('/room');
  }

  useEffect(() => {
    setName(localStorage.getItem('name'));
    if (!localStorage.getItem('token')) {
      window.alert('로그인을 해주세요.');
      router.push('/home');
      return;
    }
    const getUserList = async() => {
      const list: string[] = [];
      const docRef = collection(db, 'users');
      const name = localStorage.getItem('name');
      const querySnapshot = await getDocs(docRef);
      querySnapshot.forEach(item => {
        if (item.data().name !== name) {
          list.push(item.data().name)
        }
      });
      setUserList(list);
    }
    getUserList();
  }, []);

  return (
    <Layout>
      <div className='main'>
        <nav>
          <img src='/images/smallLogo.png' alt='nav-logo'/>
          <button className='sign-out' onClick={logout}>Sign Out</button>
        </nav>
        <div className='main-list-container'>
          <div className='main-list-left'>
            <div>
              <div>안녕하세요 <span>{name}</span>님</div>
              <div>친구들과 대화를 시작해 보세요.</div>
            </div>
            <img src='/images/main-bear.png' alt='bear' />
          </div>
          <div className='user-list-container'>
            <div className='user-list'>
              <div className="user-group">
                <button onClick={() => setIsGroup(false)} className="selete">유저 목록</button> 
                <div className="driver"></div>
                <button onClick={() => setIsGroup(true)} className="selete">그룹 채팅</button>
              </div>
              <div className='lists'>
                {isGroup ? <Group /> : <Lists userList={userList} goRoom={goRoom} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Main;
import React, { useEffect, useState } from 'react';

import { db } from '../services/firebase';
import { addDoc, collection } from '@firebase/firestore';
import { getDocs } from 'firebase/firestore';

type Group ={ setGroupChat: any,sent: string };

function GroupMmodal({setGroupChat, sent}: Group) {
  const [userList, setUserList] = useState<Array<string>>([]);

  const [checkedInputs, setCheckedInputs] = useState<Array<any>>([]);
  const [roomName, setRoomName] = useState('');

  const changeHandler = (e: React.FormEvent<HTMLInputElement>, id: string) => {
    const checked = e.currentTarget.checked;

    if (checked) {
      setCheckedInputs([...checkedInputs, id]);
    } else {
      // 체크 해제
      setCheckedInputs(checkedInputs.filter((el) => el !== id));
    }
  };

  const close = () => {
    setGroupChat(false);
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setRoomName(value);
  }

  const invite = async() => {
    const member: Array<any> = [];
    let cn: string;
    let cw: string;
    const me = localStorage.getItem('name');
    member.push(me);
    member.push(...checkedInputs, sent);
    if (!roomName) {
      return window.alert('방이름을 적어주세요');
    }
    
    const obj = { name: roomName, crew: member};
    const current = obj.crew.sort().toString();
    const docRef = collection(db, 'groupName');
    const querySnapshot = await getDocs(docRef);
    querySnapshot.forEach(item => {
      const data = item.data();
      cw = data.crew?.sort().toString();
      cn = data.name;
    });
    if (cn === obj.name && cw === current) {
      return window.alert('이미 방이 있습니다.');
    } else {
      await addDoc(collection(db, 'groupName'), obj);
      window.alert('만들기 성공');
      close();
      return;
    }
  }

  const getUserList = async() => {
    const list: string[] = [];
    const name = localStorage.getItem('name');
    const querySnapshot = await getDocs(collection(db, 'users'));
    querySnapshot.forEach( item => {
      if (item.data().name !== name) {
        list.push(item.data().name)
      }
    })
    const idx = list.indexOf(sent);
    list.splice(idx, 1);
    setUserList(list);
  }

  useEffect(() => {
    getUserList();
  }, [])

  return (
    <div className='modal'>
      <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%'}}>
        <img onClick={close}src='/images/no.png' alt='close' style={{ width: '2rem', cursor: 'pointer'}} />
      </div>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'center'}}>
        <div style={{ color: 'gray', margin: '0 0.5rem 0 0', fontWeight: '700', fontSize: '1rem'}}>방이름: </div>
        <input style={{ border: 'none', backgroundColor: 'white', borderRadius: '5px'}}value={roomName} onChange={onChange} />
      </div>
      <div className='modal-lists'style={{ overflow: 'scroll',flex: '1'}}>
        {userList.map(name => <div className='modal-list' style={{display: 'flex'}}>
          <input id={name} type="checkbox" name={name} onChange={(e)=>{changeHandler(e, name)}}/>
          <div>{name}</div>
        </div>)}
      </div>
      <div className='modal-button'><button onClick={invite} style={{cursor: 'pointer'}}>초대하기</button></div>
    </div>
  )
}

export default GroupMmodal;


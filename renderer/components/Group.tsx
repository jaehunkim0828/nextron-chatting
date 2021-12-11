import { collection, getDocs } from '@firebase/firestore';
import router from 'next/router';
import React, { useEffect, useState } from 'react';
import { db } from '../services/firebase';

function Group() {
  const [gL, setGL] = useState<any[]>([]);

  const getGroup = async() => {
    const docRef = collection(db, 'groupName');
    const querySnapshot = await getDocs(docRef);
    querySnapshot.forEach(item => {
      const data = item.data();
      const me = localStorage.getItem('name');
      const groupList: any[] = [];
      for (let i = 0; i < data.crew.length; i += 1) {
        if (data.crew[i] === me) {
          const group: any = {name: data.name, crew: data.crew};
          setGL([...groupList, group]);
          groupList.push(group);
        }
      }
    });
  }

  const goGRoom = (group: any) => {
    localStorage.setItem('group', JSON.stringify(group));
    router.push('/groupRoom');
  }

  useEffect(() =>{
    getGroup()
  },[]);

  return (
    <div className='lists'>
      {gL.map((group, i) => 
        <div className='list' key={`user${i}`}>
          <section>
            <img src='/images/main-rabbit.png' alt='rabbit'/>
            <div>{group.name}</div>
          </section>
          <button onClick={() => {goGRoom(group)}}>대화하기</button>
        </div>
      )}
    </div>
  )
};

export default Group;
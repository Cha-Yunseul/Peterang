import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { dbService } from '../fbase';
import { useParams } from 'react-router';

const BoardView = () => {
  const [data, setData] = useState([]);

  const params = useParams();
  const id = Number(params.data);

  console.log(id); //createdAt 값이 구해집니다 ! 이 값을 가진 데이터를 구하고싶어요..

  useEffect(() => {
    async () => {
      const detailRef = doc(dbService, 'posts', id);
      const res = await getDoc(detailRef, { id });
      setData(res.data());
    };
  }, []);

  return (
    <div>
      <div>안녕</div>
    </div>
  );
};

export default BoardView;

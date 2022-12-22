import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { dbService } from '../fbase';
import { useParams } from 'react-router';
import CommentCreate from '../components/CommentCreate';
import CommentList from '../components/CommentList';

const BoardView = () => {
  const [data, setData] = useState([]);

  const params = useParams();
  const id = params.data;

  console.log(id);

  useEffect(() => {
    (async () => {
      var row = [];
      const detailRef = doc(dbService, `posts/${id}`);
      const res = await getDoc(detailRef);
      // setData(res.data());
      var childData = res.data();
      row.push(childData);
      setData(childData);
      // console.log(row);
    })();
  }, []);

  console.log(data);

  return (
    <div className="w-9/12 m-4">
      <div className="">
        <div className="grid w-full h-full gap-4 ">
          <div className="border-b-2">작성자 : {data.creatorId}</div>
          <div className="border-b-2">제목 : {data.title}</div>
          <div className="border-2 h-96">{data.content}</div>
        </div>
      </div>
      <div>
        <CommentList />
      </div>

      <div>
        <CommentCreate />
      </div>
    </div>
  );
};

export default BoardView;

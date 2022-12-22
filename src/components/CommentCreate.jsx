import React, { useState, useEffect } from 'react';
import { dbService, authService } from '../fbase';
import { collection, onSnapshot, addDoc, doc } from 'firebase/firestore';
import { useParams } from 'react-router';

const CommentCreate = ({ userObj }) => {
  const user = authService.currentUser;
  const email = user.email;

  const params = useParams();
  const id = params.data;

  const onSubmit = async (event) => {
    event.preventDefault();
    const commentCollectionRef = collection(dbService, 'posts', id, 'comments');
    await addDoc(commentCollectionRef, {
      createdAt: Date.now(),
      comments: comments,
      email,
    });
    window.location.reload();
  };

  const [comments, setComments] = useState([]);

  useEffect(() => {
    onSnapshot(collection(dbService, 'posts', id, 'comments'), (snapshot) => {
      const commentsArr = [];
      snapshot.docs
        .sort((post1, post2) =>
          post1.data().createdAt > post2.data().createdAt ? -1 : 1
        )
        .map((doc) => commentsArr.push({ ...doc.data(), id: doc.id }));
      // setComments((_) => [...commentsArr]);
      setComments('');
    });
  }, []);

  const onChangeComment = (event) => {
    const {
      target: { value },
    } = event;
    setComments(value);
  };

  return (
    <div>
      <div></div>

      <div className="">
        <form onSubmit={onSubmit}>
          <input
            className="border-4 w-3/4"
            value={comments}
            onChange={onChangeComment}
            type="text"
            placeholder="댓글을 입력하세요"
            maxLength={500}
          />
          <input className="border-4 w-1/4  " type="submit" value="등록" />
        </form>
      </div>
    </div>
  );
};
export default CommentCreate;

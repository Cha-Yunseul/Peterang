import React, { useState, useEffect } from 'react';
import { dbService, authService } from '../fbase';
import { collection, onSnapshot, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router';

const BoardCreate = ({ userObj }) => {
  const [posts, setPosts] = useState([]);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const user = authService.currentUser;
  const email = user.email;

  let navigate = useNavigate();

  useEffect(() => {
    onSnapshot(collection(dbService, 'posts')),
      (snapshot) => {
        const postArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(postArray);
      };
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    await addDoc(collection(dbService, 'posts'), {
      title: title,
      content: content,
      creatorId: email,
      createdAt: Date.now(),
    });
    setTitle('');
    setContent('');
    navigate('/list');
  };
  const onChangeTitle = (event) => {
    const {
      target: { value },
    } = event;
    setTitle(value);
  };

  const onChangeContent = (event) => {
    const {
      target: { value },
    } = event;
    setContent(value);
  };
  return (
    <div className="flex">
      <form onSubmit={onSubmit} className="context-center ">
        <input
          className="border-4 w-full"
          value={title}
          onChange={onChangeTitle}
          type="text"
          placeholder="제목을 입력하세요"
          maxLength={120}
        />
        <input
          className="border-4 w-full h-96"
          value={content}
          onChange={onChangeContent}
          type="text"
          placeholder="내용을 입력하세요"
          maxLength={500}
        />
        <input className="border-4 w-1/4  " type="submit" value="제출" />
      </form>
    </div>
  );
};
export default BoardCreate;

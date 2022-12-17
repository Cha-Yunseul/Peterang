//게시글 작성

import { useState } from 'react';
import { getAuth } from 'firebase/auth';

function BoardCreate() {
  const [title, setTitle] = useState('');
  const [context, setContext] = useState('');
  const [isPending, setIsPending] = useState(false);

  const user = getAuth();

  const ListUp = (e) => {
    // e.preventDefault();
    const board = { user, title, context };

    setIsPending(true);

    fetch('http://localhost:3001/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(board),
    }).then(() => {
      console.log('new baord added');
      setIsPending(false);
    });
  };

  return (
    <div className=" ">
      <div className="m-auto text-center relative   ">
        <div>
          <input
            className="border-2 text-center w-1/2 m-2"
            placeholder="제목"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <input
            className="border-2 text-center w-1/2 h-96 m-2"
            placeholder="내용"
            onChange={(e) => setContext(e.target.value)}
          />
        </div>
        <div>
          <button
            className="border-2"
            onClick={() => {
              ListUp(title, context);
            }}
          >
            등록
          </button>
        </div>
      </div>
    </div>
  );
}

export default BoardCreate;

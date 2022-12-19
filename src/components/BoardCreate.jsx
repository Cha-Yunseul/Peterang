//게시글 작성

import { useState } from 'react';
import { getAuth } from 'firebase/auth';
import Repository from '../firebase/repository';

function BoardCreate({ auth, repository }) {
  const [title, setTitle] = useState('');
  const [context, setContext] = useState('');
  const [isPending, setIsPending] = useState(false);

  const user = getAuth();

  const ListUp = (e) => {
    // e.preventDefault();
    const board = { user, title, context };

    setTitle;
  };

  return (
    <div className=" ">
      <div className="m-auto text-center relative ">
        <h1 className="m-2 font-bold">Board</h1>

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
          <button className="border-2">취소</button>
        </div>
      </div>
    </div>
  );
}

export default BoardCreate;

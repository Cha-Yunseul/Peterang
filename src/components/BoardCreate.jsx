//게시글 작성

import { useState } from 'react';

function BoardCreate() {
  const [title, setTitle] = useState('');
  const [context, setContext] = useState('');

  const ListUp = (title, context) => {};

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

import { collection, getDocs } from 'firebase/firestore';
import { dbService } from '../fbase';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';
import { useParams } from 'react-router';

const CommentList = () => {
  const [querySnapShot, setQuerySnapShot] = useState([]);

  const params = useParams();
  const id = params.data;

  useEffect(() => {
    (async () => {
      var rows = [];
      const snap = await getDocs(collection(dbService, `posts/${id}/comments`));
      // setQuerySnapShot(snap);
      snap.forEach((doc) => {
        var childData = doc.data();
        childData.id = doc.id;
        rows.push(childData);
        setQuerySnapShot(rows);
      });
    })();
  }, []);
  // console.log(querySnapShot);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = (querySnapShot) => {
    let currentPosts = 0;
    currentPosts = querySnapShot.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };

  const content = currentPosts(querySnapShot).map((list) => {
    return (
      <div key={list.id}>
        <div className="grid grid-cols-3 border-solid border-b-2">
          <div className="">{list.email}</div>
          <div className="divider divider-horizontal"></div>
          <div className="">{list.comments}</div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="w-full m-4">
        <p className="font-bold text-xl text-center ">댓글</p>
        <div className="border-solid border-2 m-4">
          <div className="grid grid-cols-3 border-solid border-2 bg-gray-300">
            <div className="font-bold">작성자</div>
            <div className="divider divider-horizontal"></div>
            <div className="font-bold">내용</div>
          </div>
          <div>
            <div className="border-solid border-2">{content}</div>
          </div>
        </div>
        <div className="text-center">
          <Pagination
            className=""
            postsPerPage={postsPerPage}
            totalPosts={querySnapShot.length}
            paginate={setCurrentPage}
          ></Pagination>
        </div>
      </div>
    </>
  );
};

export default CommentList;

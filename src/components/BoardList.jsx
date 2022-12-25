import { collection, getDocs } from 'firebase/firestore';
import { dbService } from '../fbase';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';
import SearchBar from './SearchBar';

const BoardList = () => {
  const [querySnapShot, setQuerySnapShot] = useState([]);

  useEffect(() => {
    (async () => {
      var rows = [];
      const snap = await getDocs(collection(dbService, 'posts'));
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
    const view_url = `/view/${list.id}`;
    return (
      <Link to={view_url} key={list.id}>
        <div>
          <div className="grid grid-cols-3 border-solid border-b-2">
            <div className="">{list.creatorId}</div>
            <div className="divider divider-horizontal"></div>
            <div className="">{list.title}</div>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <>
      <div className="w-full">
        <p className="font-bold text-xl text-center ">목록</p>
        <div className="border-solid border-2 m-4">
          <div className="grid grid-cols-3 border-solid border-2 bg-gray-300">
            <div className="font-bold">작성자</div>
            <div className="divider divider-horizontal"></div>
            <div className="font-bold">제목</div>
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
        <div className="m-4">
          <div className="text-center w-3/4 inline-block">
            <SearchBar />
          </div>
          <div className="border-4 w-1/4 m-0 text-center inline-block ">
            <Link to="/create">글쓰기</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BoardList;

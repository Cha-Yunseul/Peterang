import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getDocs, collection } from 'firebase/firestore';
import { dbService } from '../fbase';

function SearchBar() {
  const [keyword, setKeyword] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [keyItems, setKeyItems] = useState([]);
  const autoRef = useRef < HTMLUListElement > null;
  const onChangeData = (e) => {
    setKeyword(e.currentTarget.value);
  };

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

  const content = querySnapShot.map((list) => {
    const view_url = `/view/${list.id}`;
    return (
      <Link to={view_url}>
        <div key={list.id}>
          <div className="grid grid-cols-3 border-solid border-b-2">
            <div className="">{list.creatorId}</div>
            <div className="divider divider-horizontal"></div>
            <div className="">{list.title}</div>
          </div>
        </div>
      </Link>
    );
  });

  const updateData = async () => {
    let b = querySnapShot
      .filter((list) => list.title.includes(keyword) === true)
      .slice(0, 10);
    setKeyItems(b);
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (keyword) updateData();
    }, 200);
    return () => {
      clearTimeout(debounce);
    };
  }, [keyword]); //키워드가 변경되면 api를 호출
  return (
    <>
      <div>
        <input
          value={keyword}
          onChange={onChangeData}
          placeholder="제목검색"
          className="border-4 w-full"
        />
        {keyItems.length > 0 && keyword && (
          <div>
            <div className="absolute border bg-base-100 ">
              {keyItems.map((search, idx) => (
                <span
                  className="text-left block mt-2  sm:w-64 mb-2 max-h-80 overflow-y-auto "
                  key={search.title}
                  onClick={() => {
                    setKeyword('');
                  }}
                >
                  <Link to={`/view/${search.id}`}>{search.title}</Link>
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default SearchBar;

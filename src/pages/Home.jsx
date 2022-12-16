import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto grid grid-cols-4">
      <ul className="menu bg-base-100 w-56 h-80 p-2 border-2 col-start-1">
        <li className="menu-title ">
          <div>게시판</div>
        </li>
        <li>
          <Link to="/board">숙소</Link>
        </li>
        <li>
          <Link to="/">식당</Link>
        </li>
        <li>
          <Link to="/">관광지</Link>
        </li>
        <li>
          <Link to="/">대중교통</Link>
        </li>
      </ul>

      <div className="col-start-2 col-end-5">
        <img src="public/doongee.jpg" alt="doongee" />
      </div>
    </div>
  );
}

export default Home;

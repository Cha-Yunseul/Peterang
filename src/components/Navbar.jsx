import { Link } from 'react-router-dom';
import LogOut from './Logout';

function Navbar() {
  return (
    <div className="sticky navbar top-0 z-10 w-full shadow-xl text-center bg-base-300 ">
      <div className="navbar xl:container mx-auto">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Peterang
        </Link>
        <div className="btn btn-sm">
          <LogOut />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

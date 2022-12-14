import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <Link to="/" className="btn btn-ghost normal-case text-xl">
        Peterang
      </Link>
      <div>
        <Link to="/login" className="btn btn-sm">
          Log in
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

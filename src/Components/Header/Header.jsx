import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../ContextApi/AuthContext";

function Header() {
  const { user, logOutUser } = use(AuthContext);

  const handleLogout = () => {
    logOutUser();
  };

  return (
    <div>
      <nav className="flex items-center justify-between px-5 ">
        <div>
          <h4>From Contoling</h4>
        </div>
        <div>
          <ul className="flex gap-5 p-5">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              {user && (
                <>
                  <Link className="mr-4" to="/orders">
                    Order
                  </Link>
                  <Link to="/profile">Profile</Link>
                </>
              )}
            </li>
            <li>
              {user ? (
                <>
                  <span className="font-bold mx-2">{user.email}</span>
                  <button onClick={handleLogout}>Log Out</button>
                </>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;

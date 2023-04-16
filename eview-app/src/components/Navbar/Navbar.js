import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useContext } from 'react';
import { AuthContext } from "../../context/AuthContext";

export const Navbar = () => {
  const { isAuthenticated, userEmail } = useContext(AuthContext);

  return (
    <div className={styles.navbar}>
      <div className="px-2 flex justify-between items-center w-full h-full">
        <ul className="flex justify-center">
          <li className={styles.navlink}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.navlink}>
            <Link to="/dashboard">Select Stocks</Link>
          </li>
          
          {isAuthenticated && (
          <li className={styles.navlink}>
            <Link to="/watchlist">My Watchlist</Link>
          </li>)}

        </ul>
        {isAuthenticated && (
        <span>My email: {userEmail}</span>
        )}

        <div className='flex items-center justify-start md:justify-start pl-2 pr-10'>
          {isAuthenticated && (
            <Link to='/logout'>
              <button className={`bg-zinc-300 border-none pl-5 pr-5 py-3 bg-transparent text-black mr-10 hover:bg-gray-200`}>
                Logout
              </button>
            </Link>
          )}

          { !isAuthenticated && (
            <>
              <Link to='/login'>
                <button className={`bg-zinc-300 border-none pl-5 pr-5 py-3 bg-transparent text-black mr-10 hover:bg-gray-200`}>
                  Login
                </button>
              </Link>
              <Link to='/register'>
                <button className="pl-5 pr-5 py-3 mr-20 border-none bg-indigo-700 hover:bg-indigo-500">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

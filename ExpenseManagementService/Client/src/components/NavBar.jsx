import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const NavBar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  // Only show the Login link if not on /login
  const showLoginLink = location.pathname !== '/login';

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#2c3846] text-white flex justify-between items-center py-3 px-6">
      {/* Left side (links for authenticated users) */}
      <div>
        {user && (
          <>
            <Link className="mr-4" to="/dashboard">Dashboard</Link>
            <Link className="mr-4" to="/employees">Employees</Link>
            <Link className="mr-4" to="/expenses">Expenses</Link>
          </>
        )}
      </div>

      {/* Right side (login/logout) */}
      <div>
        {user ? (
          <button
            onClick={logout}
            className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
          >
            Logout
          </button>
        ) : (
          showLoginLink && (
            <Link className="mr-4" to="/login">
              Login
            </Link>
          )
        )}
      </div>
    </nav>
  );
};

export default NavBar;

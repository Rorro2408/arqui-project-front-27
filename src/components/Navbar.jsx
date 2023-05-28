import svgLogo from '../assets/react.svg';
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { removeUserAndUserToken } from '../utils/session'
import PropTypes from 'prop-types';

Navbar.propTypes = {
  logged: PropTypes.bool.isRequired,
};

export default function Navbar({ logged }) {
  const navigate = useNavigate()

  const handleLogout = () => {
    removeUserAndUserToken()
    navigate('/login');
  };

  return (
    <nav className="bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink to="/" className="flex w-auto items-center">
          <img src={svgLogo} className="h-8 mr-3" alt="React Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">ElGranDia.me</span>
        </NavLink>
        <div className="flex items-center justify-between w-auto order-1">
          <ul className="flex flex-row space-x-8 font-medium border rounded-lg bg-gray-900 border-gray-700">
            <li>
              <NavLink to="/about" className="rounded bg-transparent text-sm">Nosotros</NavLink>
            </li>
            {logged &&
              <>
                <li>
                  <NavLink to="/events" className="rounded bg-transparent text-blue-500" >Ver Eventos</NavLink>
                </li>
                <li>
                  <NavLink to="/requests" className="rounded bg-transparent text-blue-500" >Ver Requests</NavLink>
                </li>
                <li>
                  <NavLink to="/wallet" className="rounded bg-transparent text-blue-500" >Ver Wallet</NavLink>
                </li>
              </>
            }
            <li>
              <NavLink to="/contact" className="rounded bg-transparent text-sm">Contacto</NavLink>
            </li>
          </ul>
        </div>
        {!logged &&
          <>
            <div className="flex order-0 w-auto">
              <Link to="/login" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm mr-4 px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Iniciar sesión</Link>
              <Link to="/register" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm mr-4 px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Registrarse</Link>
            </div>
          </>}
        {logged &&
          <div className="flex order-2 w-auto">
            <button onClick={handleLogout} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cerrar sesión</button>
          </div>}
      </div>
    </nav>
  )
}
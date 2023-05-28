import Navbar from "./Navbar";
import { getUser } from "../utils/session";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';


Layout.propTypes = {
  children: PropTypes.node
}

export default function Layout({ children }) {

  const [isUserLogged, setIsUserLogged] = useState(false);

  useEffect(() => {
    const user = getUser()
    setIsUserLogged(user ? true : false);
  }, []);

  return (
    <>
      <header>
        <Navbar logged={isUserLogged} />
      </header>
      <main>
        <div className="mt-20">
          {children}
        </div>
      </main>
      <footer>
      </footer>
    </>
  );
}
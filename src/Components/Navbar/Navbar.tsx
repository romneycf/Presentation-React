import React, { ReactNode, useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Link,
  useNavigate,
  useLocation
} from "react-router-dom";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    //FAZ ALGUMA COISA AO ENTRAR NO CONTAINER
  }, [location]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleNavigation = () => {
    //navigate();
  };

  return (
    <div className={styles.container}>
      <nav>
        <ul>
          <Button className={styles.btChange} onClick={handleBack}>
            {" "}
            Anterior
          </Button>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Youth">Youth</Link>
          </li>
          <Button className={styles.btChange} onClick={handleNavigation}>
            {" "}
            Proximo
          </Button>
        </ul>
      </nav>
    </div>
  );
}

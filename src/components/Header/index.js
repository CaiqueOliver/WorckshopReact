import React, { Fragment, useState, useEffect, useContext } from "react";
import "./style.scss";
import logoAcessaBr from "../../images/logo-acessaBR.png";
import logoEbac from "../../images/logo-ebac.png";
import { LocationContext } from "../../contexts/LocationContext";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../theme";
import GlobalTheme from "../../global";
import styled from "styled-components";

const Header = () => {
  const { city, state } = useContext(LocationContext);

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  return (
    <Fragment>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalTheme />
      </ThemeProvider>

      <header className="header__container">
        <div className=" header__ logo header__logo--state">
          <img src={logoAcessaBr} alt="Logo AcessaBR" />
          <span className="header__city">
            / {city} - {state}
          </span>
        </div>

        <div className="header__ logo header__logo--ebac">
          <ButtonChange onClick={toggleTheme}>Mudar tema</ButtonChange>
          <span className="header__span">Apoio:</span>

          <img src={logoEbac} alt="Logo Ebac" />
        </div>
      </header>
    </Fragment>
  );
};

const ButtonChange = styled.button`
  background-color: #00b6c1;
  color: #fff;
  width: 100px;
  height: 40px;
  border-radius: 10px;
  margin-right: 20px;
`;

export default Header;

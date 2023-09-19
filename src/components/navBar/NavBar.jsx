import { Header, NavBtnLogo, Menu } from "./NavBar.style";
import { useState } from "react";

const NavBar = () => {
  const [menuActivated, setMenuActivated] = useState(false);

  const handleClick = () => {
    setMenuActivated(!menuActivated);
    console.log(menuActivated);
  };

  return (
    <Header>
      <NavBtnLogo>
        <a href="#home"></a>
        <button id="btn-menu" onClick={handleClick}>
          <i className={menuActivated === true ? "bi-x-lg" : "bi-list"}></i>
        </button>
      </NavBtnLogo>
      <Menu className={menuActivated === true ? "menu-open" : "menu-closed"}>
        <ul>
          <li>
            <a href="#home" onClick={handleClick}>
              Início
            </a>
          </li>
          <li>
            <a href="#aboutMe" onClick={handleClick}>
              Sobre Nós
            </a>
          </li>
          <li>
            <a href="#service" onClick={handleClick}>
              Nossos Serviços
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleClick}>
              Contato
            </a>
          </li>
          <li>
            <a href="#faq" onClick={handleClick}>
              FAQ
            </a>
          </li>
        </ul>
        <div>
          <span>
            <i className="bi bi-facebook"></i>
          </span>
          <span>
            <i className="bi bi-twitter"></i>
          </span>
          <span>
            <i className="bi bi-instagram"></i>
          </span>
        </div>
      </Menu>
    </Header>
  );
};

export default NavBar;

import { React } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-dark bg-dark fixed-top pl-32 p-4">
        <Link
          className="navbar-brand flex-row align-items-baseline d-flex"
          to="/"
        >
          <img width="48" src={Logo} alt="f1-logo" />
          <div className="pl-16">F1 Champions</div>
        </Link>
      </nav>
    </header>
  );
};

export default Header;

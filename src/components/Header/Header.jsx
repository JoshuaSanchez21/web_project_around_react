import logo from "../../../images/logo.svg";
function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo Around the U.S." className="header__image" />
    </header>
  );
}

export default Header;

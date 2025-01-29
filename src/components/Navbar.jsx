import logo from "../assets/Liverpool_FC.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <img id={"logo"} src={logo} alt="Logo" />
        <span>To-do APP </span>
      </div>
    </nav>
  );
}

import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__content">
        <nav>
          <ul>
            <li>
              <Link to="/" className="sidebar__nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="sidebar__nav-link">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

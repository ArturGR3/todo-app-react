import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-[91px] bg-gray-100 p-4 border-r border-gray-300">
      <div>
        <nav>
          <ul className="list-none p-0 m-0">
            <li className="my-2">
              <Link to="/" className="block py-3 px-4 my-2 text-gray-700 no-underline rounded hover:bg-gray-50 hover:border-l-3 hover:border-liverpool-red hover:text-liverpool-red transition-all duration-300 border-l-3 border-transparent">
                Home
              </Link>
            </li>
            <li className="my-2">
              <Link to="/about" className="block py-3 px-4 my-2 text-gray-700 no-underline rounded hover:bg-gray-50 hover:border-l-3 hover:border-liverpool-red hover:text-liverpool-red transition-all duration-300 border-l-3 border-transparent">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

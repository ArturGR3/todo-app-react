import logo from "../assets/Liverpool_FC.png";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-black text-center justify-around">
      <div className="flex flex-row items-center justify-center mx-5 bg-gray-100 rounded-2xl">
        <img className="w-[6%]" src={logo} alt="Logo" />
        <h1 className="text-center text-liverpool-red rounded-md font-semibold p-5 uppercase">Liverpool fc to-do list</h1>
      </div>
    </nav>
  );
}

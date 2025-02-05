import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className="flex flex-row items-center justify-center w-full">
      <Link to="/about">
        <img src="src/assets/gerard.png" alt="Gerard" className="bg-white w-24" />
      </Link>
      <p className="text-xl text-red-600 font-bold">This is me, Gerard</p>
    </div>
  );
}

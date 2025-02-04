import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-5">
      <Link to="/about">
        <img src="src/assets/gerard.png" alt="Gerard" className="w-1/2" />
      </Link>
    </div>
  );
}

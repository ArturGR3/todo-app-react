import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className="about-container">
      <Link to={"/about"}>
        {" "}
        <img id="gerard" src="src/assets/gerard.png" />
      </Link>
    </div>
  );
}

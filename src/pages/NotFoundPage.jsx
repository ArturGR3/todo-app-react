import { Link } from "react-router-dom";
import "../styles/NotFoundPage.css";
import "../styles/shared.css";

export default function NotFoundPage() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn">
        Return to Home
      </Link>
    </div>
  );
}

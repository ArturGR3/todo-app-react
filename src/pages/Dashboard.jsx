import { Link } from "react-router-dom";
import Todos from "../components/Todos";

export default function Dashboard() {
  return (
    <>
      <Todos />
      <Link to={"/"}> Placeholder Dashboard </Link>
    </>
  );
}

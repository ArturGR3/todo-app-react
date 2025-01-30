import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../styles/ItemDetails.css";
import "../styles/shared.css";

export default function ItemDetails({ items }) {
  const { itemId } = useParams();
  console.log("itemId type:", typeof itemId, "value:", itemId);

  const foundItem = items.find((item) => {
    return item.id === Number(itemId);
  });

  console.log("find porjec", foundItem);

  return (
    <>
      <div className="item-details">
        <h2>{foundItem.task}</h2>
        <p>{foundItem.details}</p>
        <Link to="/" className="btn">
          Back to Dashboard
        </Link>
      </div>
    </>
  );
}

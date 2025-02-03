import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../styles/ItemDetails.css";
import "../styles/shared.css";

export default function ItemDetails({ items }) {
  const { itemId } = useParams();

  // Add this debug log to see all items
  console.log("All items:", items);

  const foundItem = items.find((item) => {
    // Let's log in a more readable format
    console.log("Comparing:", {
      itemId: itemId,
      currentItemId: item.id,
      currentItemIdType: typeof item.id,
    });
    return item.id.toString() === itemId; // Remove toString() for now
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

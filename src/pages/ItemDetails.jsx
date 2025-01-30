import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function ItemDetails({ items }) {
  const { itemId } = useParams();
  console.log("itemId type:", typeof itemId, "value:", itemId);

  const foundItem = items.find((item) => {
    return item.id === Number(itemId);
  });

  console.log("find porjec", foundItem);

  return (
    <>
      <div className="item-details">{foundItem.task}</div>
      <Link to={"/"}> Placeholder ItemDetails </Link>
    </>
  );
}

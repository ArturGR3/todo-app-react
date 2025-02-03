import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../styles/ItemDetails.css";
import "../styles/shared.css";
import { useState, useEffect } from "react";

export default function ItemDetails({ items, updateTodo, className }) {
  const { itemId } = useParams();

  const foundItem = items.find((item) => {
    return item.id.toString() === itemId;
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedCompleted, setCompleted] = useState(true);
  const [editedTask, setEditedTask] = useState("");
  const [editedDetails, setEditedDetails] = useState("");

  useEffect(() => {
    setEditedTask(foundItem.task);
    setEditedDetails(foundItem.details);
    setCompleted(foundItem.completed);
  }, [foundItem]);

  const handleEdit = () => {
    const editTodo = {
      id: foundItem.id,
      task: editedTask,
      completed: editedCompleted,
      details: editedDetails,
    };

    updateTodo(editTodo);
    setIsEditing(false);
  };

  return (
    <>
      <div className={`item-details ${className}`}>
        {isEditing ? (
          <div className="input-block">
            <input type="text" value={editedTask} onChange={(e) => setEditedTask(e.target.value)} className="edit-input" />

            <textarea value={editedDetails} onChange={(e) => setEditedDetails(e.target.value)} className="edit-input" />

            <label id="checked">
              <input type="checkbox" checked={editedCompleted} onChange={(e) => setCompleted(e.target.checked)} className={"edit-input"} />
              <span>{editedCompleted ? "Completed" : "Not Completed"}</span>
            </label>

            <button onClick={() => handleEdit()} className="complete-button">
              Save Changes
            </button>
          </div>
        ) : (
          <>
            <h2>{foundItem.task}</h2>
            <p>{foundItem.details}</p>
            <button onClick={() => setIsEditing(true)} className="complete-button">
              Edit
            </button>
          </>
        )}
        <Link to="/" className="complete-button">
          Back to Dashboard
        </Link>
      </div>
    </>
  );
}

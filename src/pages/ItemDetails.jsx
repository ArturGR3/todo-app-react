import { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ItemDetails({ items, updateTodo }) {
  const { itemId } = useParams();
  const foundItem = items.find((item) => item.id === parseInt(itemId));

  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(foundItem?.task || "");
  const [editedDetails, setEditedDetails] = useState(foundItem?.details || "");
  const [editedCompleted, setCompleted] = useState(foundItem?.completed || false);

  const handleEdit = () => {
    const updatedTodo = {
      ...foundItem,
      task: editedTask,
      details: editedDetails,
      completed: editedCompleted,
    };
    updateTodo(updatedTodo);
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col items-center p-40 m-4 bg-gray-100 rounded-lg shadow-sm">
      {isEditing ? (
        <div className="flex flex-col items-center">
          <input type="text" value={editedTask} onChange={(e) => setEditedTask(e.target.value)} className="w-full mb-8 p-8 border border-gray-200 rounded focus:outline-none focus:border-liverpool-red focus:ring-2 focus:ring-liverpool-red/10" />

          <textarea value={editedDetails} onChange={(e) => setEditedDetails(e.target.value)} className="w-full min-h-[100px] mb-8 p-8 border border-gray-200 rounded focus:outline-none focus:border-liverpool-red focus:ring-2 focus:ring-liverpool-red/10" />

          <label className="flex justify-start text-left w-full mb-4">
            <input type="checkbox" checked={editedCompleted} onChange={(e) => setCompleted(e.target.checked)} className="mr-2" />
            <span>{editedCompleted ? "Completed" : "Not Completed"}</span>
          </label>

          <button onClick={handleEdit} className="px-4 py-2 mb-4 border-2 border-blue-600 rounded text-blue-600 transition-all duration-400 hover:bg-blue-600 hover:text-white">
            Save Changes
          </button>
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-4">{foundItem.task}</h2>
          <p className="mb-8">{foundItem.details}</p>
          <button onClick={() => setIsEditing(true)} className="px-4 py-2 mb-4 border-2 border-blue-600 rounded text-blue-600 transition-all duration-400 hover:bg-blue-600 hover:text-white">
            Edit
          </button>
        </>
      )}
      <Link to="/" className="px-4 py-2 border-2 border-blue-600 rounded text-blue-600 transition-all duration-400 hover:bg-blue-600 hover:text-white">
        Back to Dashboard
      </Link>
    </div>
  );
}

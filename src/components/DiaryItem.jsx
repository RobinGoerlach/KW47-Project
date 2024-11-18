const DiaryItem = ({ entry, onDelete, onEdit }) => (
  <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-petrol">
    <p className="text-sm text-gray-500">{entry.date}</p>
    <h3 className="text-xl font-semibold text-gray-800">{entry.title}</h3>
    <p className="text-gray-700 mt-2">{entry.text}</p>
    <div className="flex justify-end mt-4 space-x-4">
      <button
        onClick={onEdit}
        className="text-petrol hover:text-navy underline"
      >
        Edit
      </button>
      <button
        onClick={onDelete}
        className="text-red-500 hover:text-red-700 underline"
      >
        Delete
      </button>
    </div>
  </div>
);

export default DiaryItem;

const DiaryItem = ({ entry, onDelete, onEdit }) => (
  <div className="bg-base-200 shadow-md rounded-lg p-4 border-l-4 border-primary">
    <p className="text-sm text-gray-500">{entry.date}</p>
    <h3 className="text-xl font-semibold text-gray-800">{entry.title}</h3>
    <p className="text-gray-700 mt-2">{entry.text}</p>
    <div className="flex justify-end mt-4 space-x-4">
      <button onClick={onEdit} className="btn btn-accent hover:underline">
        Edit
      </button>
      <button onClick={onDelete} className="btn btn-error hover:underline">
        Delete
      </button>
    </div>
  </div>
);

export default DiaryItem;

import DiaryItem from "./DiaryItem";

// Liste der Tagebuch-Einträge
const DiaryList = ({ entries, onDelete, onEdit }) => (
  <div className="p-6 space-y-4">
    {entries.length > 0 ? (
      entries.map((entry, index) => (
        <DiaryItem
          key={index} // Eindeutiger Schlüssel
          entry={entry}
          onDelete={() => onDelete(index)}
          onEdit={() => onEdit(index)}
        />
      ))
    ) : (
      <p className="text-gray-500 text-center">
        No entries yet. Start writing your diary today!
      </p>
    )}
  </div>
);

export default DiaryList;

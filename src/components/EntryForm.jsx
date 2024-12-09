import { useState } from "react";

// Formular zum Hinzufügen neuer Einträge
const EntryForm = ({ onSave }) => {
  const [text, setText] = useState(""); // Text für den neuen Eintrag

  const handleSubmit = (e) => {
    e.preventDefault(); // Standardformularaktion verhindern
    if (text.trim()) {
      onSave(text); // Text speichern
      setText(""); // Textfeld leeren
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-base-100 shadow-lg rounded-xl border border-primary"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Add a New Entry
      </h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your thoughts here..."
        className="w-full p-4 border-2 border-primary rounded-lg focus:outline-none focus:ring focus:ring-accent"
        rows={5}
      />
      <button type="submit" className="mt-4 btn btn-primary shadow-md">
        Save Entry
      </button>
    </form>
  );
};

export default EntryForm;

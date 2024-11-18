import { useState } from "react";

const EntryForm = ({ onSave }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onSave(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Add a New Entry
      </h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your thoughts here..."
        className="w-full p-4 border-2 border-petrol rounded-lg focus:outline-none focus:ring focus:ring-petrol focus:ring-opacity-50 text-gray-800"
        rows={5}
      />
      <button
        type="submit"
        className="mt-4 bg-petrol text-white px-6 py-2 rounded-full hover:bg-navy transition-all shadow-md"
      >
        Save Entry
      </button>
    </form>
  );
};

export default EntryForm;

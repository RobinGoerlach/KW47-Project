import { useState, useEffect } from "react";
import Header from "./components/Header";
import EntryForm from "./components/EntryForm";
import DiaryList from "./components/DiaryList";

const App = () => {
  const [entries, setEntries] = useState(
    () => JSON.parse(localStorage.getItem("diary")) || []
  );

  useEffect(() => {
    localStorage.setItem("diary", JSON.stringify(entries));
  }, [entries]);

  const addEntry = (text) => {
    const newEntry = {
      title: `Entry for ${new Date().toLocaleDateString()}`,
      text,
      date: new Date().toLocaleDateString(),
    };
    setEntries([newEntry, ...entries]);
  };

  const deleteEntry = (index) => {
    setEntries(entries.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="p-6">
        <EntryForm onSave={addEntry} />
        <DiaryList entries={entries} onDelete={deleteEntry} />
      </main>
    </div>
  );
};

export default App;

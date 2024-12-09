import { useState, useEffect } from "react";
import Header from "./components/Header";
import EntryForm from "./components/EntryForm";
import DiaryList from "./components/DiaryList";

// Hauptkomponente der Anwendung
const App = () => {
  // State für die Tagebuch-Einträge, initialisiert aus dem localStorage
  const [entries, setEntries] = useState(
    () => JSON.parse(localStorage.getItem("diary")) || []
  );

  // Effekt, um Einträge im localStorage zu speichern, wenn sie sich ändern
  useEffect(() => {
    localStorage.setItem("diary", JSON.stringify(entries));
  }, [entries]);

  // Funktion zum Hinzufügen eines neuen Eintrags
  const addEntry = (text) => {
    const newEntry = {
      title: `Entry for ${new Date().toLocaleDateString()}`, // Dynamischer Titel
      text, // Der vom Nutzer eingegebene Text
      date: new Date().toLocaleDateString(), // Datum des Eintrags
    };
    setEntries([newEntry, ...entries]); // Neuer Eintrag wird an den Anfang der Liste gesetzt
  };

  // Funktion zum Löschen eines Eintrags
  const deleteEntry = (index) => {
    setEntries(entries.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-gray-100 min-h-screen bg-navy text-lcarsGold">
      <div className="text-2xl">
        <i className="fas fa-star"></i> Hello there
      </div>
      <Header /> {/* Kopfzeile */}
      <main className="p-6 space-y-6">
        <EntryForm onSave={addEntry} />{" "}
        {/* Formular zum Hinzufügen neuer Einträge */}
        <DiaryList entries={entries} onDelete={deleteEntry} />{" "}
        {/* Liste der Einträge */}
      </main>
    </div>
  );
};

export default App;

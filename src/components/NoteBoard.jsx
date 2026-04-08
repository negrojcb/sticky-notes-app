import { useState } from "react";
import { useColorContext } from "../context/ColorContext";
import useNotes from "../hooks/useNotes";
import Note from "./Note";

export default function NoteBoard() {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const { defaultColor } = useColorContext();
  const { notes, addNote, deleteNote } = useNotes();

  function handleAddNote() {
    const trimmedText = text.trim();

    if (!trimmedText) {
      setError("No puedes añadir una nota vacía");
      return;
    }

    if (notes.length >= 10) {
      setError("Solo puedes tener hasta 10 notas");
      return;
    }

    addNote(trimmedText, defaultColor);
    setText("");
    setError("");
  }

  return (
    <div className="board-container">
      <h1>Notas Adhesivas</h1>

      <div className="note-form">
        <input
          type="text"
          placeholder="Escribe una nota..."
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button onClick={handleAddNote}>Añadir</button>
      </div>

      {error && <p className="error-message">{error}</p>}

      {notes.length === 0 ? (
        <p>No hay notas todavía</p>
      ) : (
        <div className="notes-board">
          {notes.map((note) => (
            <Note key={note.id} note={note} onDelete={deleteNote} />
          ))}
        </div>
      )}
    </div>
  );
}

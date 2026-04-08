import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function useNotes() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  function addNote(text, color) {
    const trimmedText = text.trim();

    if (!trimmedText) return;
    if (notes.length >= 10) return;

    const newNote = {
      id: uuidv4(),
      text: trimmedText,
      color,
    };

    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  function deleteNote(id) {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  }

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return { notes, addNote, deleteNote };
}

import "./App.css";
import React, { useState, useRef, useEffect } from "react";

export default function App() {
  const [text, setText] = useState(localStorage.getItem("note") || "");
  const [activeNote, setActiveNote] = useState(null)

  const focusRef = useRef(null);

  useEffect(() => {
    focusRef.current.focus();
    localStorage.setItem("note", text);
  }, [text]);

  async function newNote() {
     localStorage.setItem("note", text)
      setActiveNote(localStorage.getItem("note"))
  }

  return (
    <div className="container">
      <textarea
        placeholder="Your best ideas go here..."
        ref={focusRef}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setText(e.target.value)
        }
        defaultValue={activeNote}
      />
      <div className="sidebar">
          <a onClick={() => setActiveNote(localStorage.getItem("note"))}>
              {localStorage.getItem("note")}
          </a>
          <a onClick={() => newNote()}>Create note</a>
      </div>
    </div>
  );
}

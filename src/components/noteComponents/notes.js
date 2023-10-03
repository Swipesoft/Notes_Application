import React, { useState, useEffect } from "react";
import "../css/note.css";
import Note from "./note";
import CreateNote from "./createNote";
import { v4 as uuid } from "uuid";

//run "npm install uuidv4" on commandline or bash

function Notes() {
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState("");

  //get text to store in  state
  const textHandler = (e) => {
    setInputText(e.target.value);
  };

  //add new notes to the state array
  const saveHandler = () => {
    setNotes((prevState) => [
      ...prevState,
      {
        id: uuid(),
        text: inputText
      }
    ]);

    //clear the textarea
    setInputText("");
  };

  //delete note function
  const deleteNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("notes"));
    if (data && data.length > 0) {
      setNotes(data);
    }
  }, []);

  <CreateNote
    textHandler={textHandler}
    saveHandler={saveHandler}
    inputText={inputText}
  />;

  return (
    <div className="notes">
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          deleteNote={deleteNote}
        />
      ))}

      <CreateNote
        textHandler={textHandler}
        saveHandler={saveHandler}
        inputText={inputText}
      />
    </div>
  );
}

export default Notes;

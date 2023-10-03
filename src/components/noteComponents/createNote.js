import React from "react";
import LinearProgress from "@mui/material/LinearProgress";

function CreateNote({ textHandler, saveHandler, inputText }) {
  const charLimit = 100;
  const charLeft = charLimit - inputText.length;

  return (
    <div className="note" style={{ background: "rgba(255, 255, 255,0)" }}>
      <textarea
        cols="10"
        rows="5"
        placeholder="Type..."
        value={inputText}
        onChange={textHandler}
        maxLength="100"
      ></textarea>
      <div className="note_footer">
        <span className="label">{charLeft} left</span>
        <button onClick={saveHandler} className="note_save">
          Save
        </button>
      </div>
      <LinearProgress
        className="char_progress"
        variant="determinate"
        value={charLeft}
      />
    </div>
  );
}

export default CreateNote;

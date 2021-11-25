import React from "react";

function NoteItem(props) {
  return (
    <div className="note-item">
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
}

export default NoteItem;

import React from "react";
import NoteItem from "./note-item";

function Note() {
  return (
    <section className="note--container">
      <div className="mainInner">
        <div className="noteItems--wrapper">
          <NoteItem
            title="Note Title"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, nemo? Ipsum consequuntur veritatis odio illum, dolor in! Molestias quibusdam debitis ea porro, laborum ipsa ullam vero quos consequuntur sunt odio.."
          />
          <NoteItem
            title="Note Title"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, nemo? Ipsum consequuntur veritatis odio illum, dolor in! Molestias quibusdam debitis ea porro, laborum ipsa ullam vero quos consequuntur sunt odio.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, nemo? Ipsum consequuntur veritatis odio illum, dolor in! Molestias quibusdam debitis ea porro, laborum ipsa ullam vero quos consequuntur sunt odio."
          />
          <NoteItem
            title="Note Title"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
          />
          <NoteItem
            title="Note Title"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, nemo? Ipsum consequuntur veritatis odio illum, dolor in! Molestias quibusdam debitis ea porro, laborum ipsa ullam vero quos consequuntur sunt odio.."
          />
          <NoteItem
            title="Note Title"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, nemo? Ipsum consequuntur veritatis odio illum, dolor in! Molestias quibusdam debitis ea porro, laborum ipsa ullam vero quos consequuntur sunt odio.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, nemo? Ipsum consequuntur veritatis odio illum, dolor in! Molestias quibusdam debitis ea porro, laborum ipsa ullam vero quos consequuntur sunt odio."
          />
          <NoteItem
            title="Note Title"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
          />
          <NoteItem
            title="Note Title"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, nemo? Ipsum consequuntur veritatis odio illum, dolor in! Molestias quibusdam debitis ea porro, laborum ipsa ullam vero quos consequuntur sunt odio.."
          />
          <NoteItem
            title="Note Title"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, nemo? Ipsum consequuntur veritatis odio illum, dolor in! Molestias quibusdam debitis ea porro, laborum ipsa ullam vero quos consequuntur sunt odio.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, nemo? Ipsum consequuntur veritatis odio illum, dolor in! Molestias quibusdam debitis ea porro, laborum ipsa ullam vero quos consequuntur sunt odio."
          />
          <NoteItem
            title="Note Title"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
          />
        </div>
      </div>
    </section>
  );
}

export default Note;

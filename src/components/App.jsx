import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [addNote, setAddNotes] = useState([]);

  function handleClick(item) {
    //console.log(item);
    setAddNotes((prevValue) => {
      return [...prevValue, item];
    });
  }

  function deleteNote(id) {
    //console.log(id);
    setAddNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAddNote={handleClick} />
      {addNote.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;

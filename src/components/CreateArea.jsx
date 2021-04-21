import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [showNote, setShowNote] = useState(false);

  const [item, setItem] = useState({
    title: "",
    content: ""
  });

  function handleTitleChange(event) {
    const addValue = event.target.value;
    const inputName = event.target.name;

    // console.log(addValue);
    // console.log(inputName);
    setItem((prevValue) => {
      return {
        ...prevValue,
        [inputName]: addValue
      };
    });
  }

  function addShowNote() {
    setShowNote(true);
  }

  return (
    <div>
      <form className="create-note">
        {showNote && (
          <input
            name="title"
            placeholder="Title"
            value={item.title}
            onChange={handleTitleChange}
          />
        )}
        <textarea
          name="content"
          placeholder="Take a note..."
          value={item.content}
          onChange={handleTitleChange}
          rows={showNote ? "3" : "1"}
          onClick={addShowNote}
        />
        <Zoom in={showNote}>
          <Fab
            onClick={(e) => {
              e.preventDefault();
              props.onAddNote(item);
              setItem({
                title: "",
                content: ""
              });
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

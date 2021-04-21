import React, {useState} from "react";
import DeleteIcon from "@material-ui/icons/Delete";


function Note(props) {

const [mouseOver,setMouseOver] = useState(false);

function handleMouseOver(){
  setMouseOver(true);
}

function handleMouseOut(){
  setMouseOver(false);
}

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button 
        style={{backgroundColor: mouseOver && "#d8e3e7"}}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={() => {
          props.onDelete(props.id);
        }}
      >
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;

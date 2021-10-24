import React, { useState } from "react";

function CreateNote(props) {
  const [newNote, updateNote] = useState({
    title: "",
    note: "",
  });
  function handelChange(event) {
    const { name, value } = event.target;
    updateNote((preNote) => {
      return {
        ...preNote,
        [name]: value,
      };
    });
  }
  function SubmitForm(event) {
    updateNote(() => {
      return {
        title: "",
        note: "",
      };
    });
    event.preventDefault();
    props.AddNote(newNote);
  }
  function handleInputDisplay(event) {
    let button = event.target;
    button.classList.toggle("active");
    var content = button.nextElementSibling;
    content.classList.toggle("expanded");
  }
  return (
    <div>
      <form className="flex">
        <button type="button" class="collapsible" onClick={handleInputDisplay}>
          Add Note
        </button>
        <div className="flex content">
          <input
            type="text"
            placeholder="Add Title"
            onChange={handelChange}
            name="title"
            value={newNote.title}
            autoComplete="off"
          />
          <textarea
            name="note"
            id=""
            cols="30"
            rows="10"
            placeholder="Add Note"
            onChange={handelChange}
            value={newNote.note}
          ></textarea>
          <button type="submit" className="btn" onClick={SubmitForm}>
            +
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateNote;

import React, { useState } from "react";

const AddTodo = () => {
  const [title, setTitle] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <>
      <form>
        <input value={title} onChange={handleTitleChange} />
        <button type="submit">Add Todo</button>
      </form>
    </>
  );
};

export default AddTodo;

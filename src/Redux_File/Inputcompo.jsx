import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./reducer";

const Inputcompo = () => {
  const [input, setinput] = useState("");
  const Dispatch = useDispatch();

  const AddTask = (e) => {
    e.preventDefault();
    Dispatch(addTodo(input));
    setinput("");
  };
  

  return (
    <>
      <form onSubmit={AddTask}>
        <input className="TaskInput" type="text" value={input} placeholder="Enter Task" onChange={(e)=>setinput(e.target.value)} />
        <button className="AddButton">add</button>
      </form>
    </>
  );
};

export default Inputcompo;

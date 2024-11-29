import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateToDo } from "./reducer";

const Outputcompo = () => {
  const [editID, seteditID] = useState(null);
  const [editText, seteditText] = useState("");
  const selector = useSelector((state) => state.todo.TodoList);
  const Dispatch = useDispatch();

  const handleUpdate = (id, text) => {
    seteditID(id);
    seteditText(text);
};
const handleSave = () => {
    Dispatch(updateToDo({ id: editID, text: editText }));
    seteditID(null);
    seteditText("");
};

// console.log(editID,"editID")x
  return (
    <>
      <ul>
        {selector.map((item) => (
          <li>
            {editID === item.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) =>seteditText(e.target.value)}
                />
                <button onClick={handleSave}>Save</button>
                <button onClick={() => seteditID(null)}>cancel</button>
              </>
            ) : (
              <>
              <div className="output">
                <h2>{item.text}</h2>

                <button onClick={()=>handleUpdate(item.id, item.text)}>
                  Update
                </button>
                <button onClick={() => Dispatch(removeTodo(item.id))}>
                  remove
                </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Outputcompo;

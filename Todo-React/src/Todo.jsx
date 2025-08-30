import React from "react";
import "./Todo.css";
import useTodo from "./useTodo";

function Todo() {
  const {
    InputValue,
    TodoList,
    Editing,
    EditValue,
    EditIN,
    HandleAdd,
    HandleDelete,
    HandleEdit,
    HandleEditText,
    HandleEditValue,
    HandleValue,
  } = useTodo();

  return (
    <div className="todo">
      <h1>TODO APP</h1>
      <form onSubmit={HandleAdd} id="Form">
        <input
        type="text"
        onChange={HandleValue}
        value={InputValue}
        />
      <button type="Submit">ADD</button>
        </form>
      <ul>
        {TodoList.map((item) => (
          <li key={item.id}>
            <div className="todoListEntry">
              <p>{item.value}</p>
              <div>
                <button onClick={() => HandleEdit(item.id, item.value)}>
                  <i className="fa-solid fa-pencil"></i>
                </button>
                <button onClick={() => HandleDelete(item.id)}>
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
            <div className="EditInput">
              {Editing === item.id && (
                <div>
                  <input
                    type="text"
                    value={EditValue}
                    onChange={HandleEditValue}
                    ref={EditIN}
                  />
                  <button onClick={() => HandleEditText(item.id, item.value)}>
                    Update
                  </button>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;

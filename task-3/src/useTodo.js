import { useRef, useState, useEffect } from "react";

const useTodo = () => {
  const [InputValue, SetInputValue] = useState("");
  const [TodoList, UpdatedList] = useState([]);
  const [Editing, SetEditing] = useState(null);
  const [EditValue, SetEditValue] = useState("");
  const EditIN = useRef(null);

  useEffect(() => {
    if (Editing !== null) {
      EditIN.current.focus();
    }
  }, [Editing]);

  //   useEffect(() => {
  //     const newTodo = localStorage.getItem("todoList");
  //     if (newTodo) {
  //       UpdatedList(JSON.parse(newTodo));
  //     }
  //     else {
  //         UpdatedList([]);
  //     }
  //   }, []);

  //   useEffect(() => {
  //     if (TodoList.length > 0) {
  //       localStorage.setItem("todoList", JSON.stringify(TodoList));
  //     }
  //   }, [TodoList]);

  const HandleAdd = (event) => {
    event.preventDefault();
    if (InputValue.trim() === ""){
        alert("Feild Cannot be Empty");
    }
    else{
    const newList = [
      ...TodoList,
      {
        id: Date.now(),
        value: InputValue,
      },
    ];
    UpdatedList(newList);
    SetInputValue("");
    SetEditing(null);
}
  };

  const HandleValue = (e) => {
    SetInputValue(e.target.value);
  };

  const HandleDelete = (id) => {
    UpdatedList(TodoList.filter((items) => items.id !== id));
  };

  const HandleEdit = (id, item) => {
    SetEditing(id);
    SetEditValue(item);
  };

  const HandleEditValue = (EditText) => {
    SetEditValue(EditText.target.value);
  };

  const HandleEditText = (id, item) => {
    if (EditValue.trim() !== "") {
      const EditIndex = TodoList.findIndex(
        (todo) => todo.id === id && todo.value === item
      );
      TodoList[EditIndex] = {
        id: id,
        value: EditValue,
      };
      SetEditing(null);
    } else {
      alert("Feild Cannot be Empty");
    }
  };
  return {
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
  };
};

export default useTodo;

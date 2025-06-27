import React, { useEffect, useState } from "react";
import "./todo.css";

function TODO() {
    const [inputValue, setInputValue] = useState("");
    const [todolist, updatedList] = useState([]);

    // useEffect(() => {
    //     const newTodo = localStorage.getItem("todoList");
    //     if (newTodo) {
    //         updatedList(JSON.parse(newTodo));
    //     }
    // }, [])

    // useEffect(() => {
    //     if(todolist.length > 0){
    //     localStorage.setItem("todoList", JSON.stringify(todolist));
    // }}, [todolist])

    const HandleAdd = () => {
        if (inputValue.trim() === "") return;

        const newList = [...todolist, {
            id: Date.now(),
            value: inputValue
        }];
        updatedList(newList);
        setInputValue("");
    }

    const HandleValue = (e) => {
        setInputValue(e.target.value);
    }

    const HandleDelete = (id) => {
        updatedList(todolist.filter(items => items.id !== id));
    }

    const HandleEdit = (id, item) => {
        setInputValue(item);
        updatedList(todolist.filter(items => items.id !== id));

    }

    const HandleEnter = (keyPressed) => {
        if (keyPressed.key === "Enter") {
            HandleAdd();
        }
    }

    return (
        <div className="todo">
            <h1>TODO APP</h1>
            <input type="text" onChange={HandleValue} onKeyDown={HandleEnter} value={inputValue} />
            <button onClick={HandleAdd}>ADD</button>
            <ul>
                {todolist.map((item) =>
                    <li id={item.id}><p>{item.value}</p>
                        <div>
                            <button onClick={() => HandleEdit(item.id, item.value)}><i className="fa-solid fa-pencil"></i></button>
                            <button onClick={() => HandleDelete(item.id)}><i className="fa-solid fa-trash"></i></button>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default TODO;
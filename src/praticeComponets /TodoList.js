import {useState} from "react";

function TodoList(){

    /*
  INSTRUCTIONS:
  Create a "todo"(add cities) app with the following criteria.
    1. The user can add new cities
    2. The user can remove existing cities items
*/

    const [list, setList] = useState([]);
    const [input, setInput] = useState("");

    const addCities = (todo) => {
        const newTodo ={
            id: Math.random(),
            todo: todo
        }


        //add the todo to list
        setList([...list, newTodo])

        //clear input box
        setInput("");

    };


    const deleteCities = (id) => {
        const newList = list.filter((todo) => todo.id !== id);

        setList(newList);
    }

    return (
    <div className="list">
        <h1>Todo</h1>
        <input type="text"
               value={input}
               onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => addCities(input)}>Add</button>

        <ul>
            {list.map((todo) => (
                <li key={todo.id}>
                    {todo.todo}
                    <button onClick={() => deleteCities(todo.id)}>&times;</button>
                </li>
            ))}
        </ul>
    </div>
    );

}

export default TodoList;
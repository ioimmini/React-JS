import Button from "./Button";
import style from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo == "") {
      return;
    }
    setToDos(currentArray => [toDo, ...currentArray]);
    setToDo(""); //state를 직접적으로 수정하지 않는다

  };
  const deleteBtn = index => {
    setToDos(toDos.filter((item, toDoIndex) => index !== toDoIndex));
    };
    

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write to do"
        />
        <button>Add</button>
      </form>
      <hr/>
      <ul>
      {toDos.map((item, index) => (
      <li key={index}>{item}
      <button  onClick={() => deleteBtn(index)}>X</button>
      </li>
      ))}
      </ul>
    </div>
  );
}

export default App;

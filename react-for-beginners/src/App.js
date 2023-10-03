import Button from "./Button";
import style from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() => {
  }, []);
  return (
    <div>
      <input 
        value={keyword}
        onChange={onChange} 
        type="text" 
        placeholder="Search.." />
      <h1 className={style.title}>{counter}</h1>
      <button onClick={onClick}>Click Me.</button>
    </div>
  );
}

export default App;

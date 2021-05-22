
import './App.css';
import Form from "./Form"
import { useState } from 'react';
import TodoList from "./TodoList"

function App() {
  const [input, setinput] = useState("")
  const [todo, settodo] = useState([])
  
  return (
    <>
    <div className="div-main">
    <div className="container">TODO LIST</div>
    <Form
    input={input}
    setinput={setinput}
    todo={todo}
    settodo={settodo}
    />
    <TodoList todo={todo} settodo={settodo}/>
    </div>
    </>
  );
}

export default App;

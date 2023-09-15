
import { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Button from './components/Button';


function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      text: "Criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id:2,
      text: "Ir para a academia",
      category:"pessoal",
      isCompleted: false,
    },
    {
      id:3,
      text:"Estudar React",
      category:"estudos",
      isCompleted: false,
    },
  ]);
  const [search, setSearch] = useState("");
  
  const [formVisivel, setFormVisivel] = useState("false");

  const addTarefa = () => {
    setFormVisivel(!formVisivel);
  };
  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
    },
  ];
    setTodos(newTodos);
  };
  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter((todo) =>
    todo.id!== id ? todo : null
     );
     setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) =>
     todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
      );
      setTodos(newTodos);
  };

  return <div className='app'>
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch}/>
      <div className='todo-list'>
        {todos
        .map((todo) => (
           <Todo 
           key={todo.id}
           todo={todo} 
           removeTodo={removeTodo} 
           completeTodo={completeTodo} 
           />
        ))}
        <div>
          <Button  addTarefa={addTarefa}/>
        </div>
      </div>
      <div>
          {formVisivel ? <TodoForm addTodo={addTodo} /> : ""}
      </div>
        {/* <TodoForm formVisivel &&  TodoFormaddTodo={addTodo} /> */}
  
  </div>;
}

export default App;

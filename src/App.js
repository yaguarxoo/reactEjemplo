import './App.css';
import HeaderNuevo from './components/header.jsx';
import ToDoList from './components/todolist.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <HeaderNuevo/>
        <h1 className="todo-style p-2">To do list</h1>
   
        <ToDoList/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

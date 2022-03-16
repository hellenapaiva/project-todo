import './styles/styles.css';
import Todos from './components/Todos';
import DisplayTodos from './components/DisplayTodos';

function App() {
  return (
      <div className="App">
        <h1>Gerenciador de Tarefas</h1>
        <Todos/>
        <DisplayTodos/>
      </div>  
  );
}

export default App;

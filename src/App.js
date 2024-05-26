
import './App.css';
import AddTodo from './components/AddTodo/AddTodo.jsx'
import Todos from './components/Todos/Todo.jsx';
import { Provider } from 'react-redux'
import store from './store/store.js'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className='container'>
          <AddTodo />
          <Todos />
        </div>
      </div>
    </Provider>
  );
}

export default App;

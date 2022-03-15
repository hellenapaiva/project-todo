import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodos, removeTodos } from '../redux/reducer';


const mapStateToProps = (state) => {
  return {
    todos: state,
  }
}

const MapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodos(todo)),
    delTodo: (id) => dispatch(removeTodos(id))
  }
}

const Todos = (props) => {

  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  }

  console.log("Props", props)

  console.log("todo", todo)

  return (
    <div className="addTodos"> 
        <input 
          className="todo-input" 
          type="text" 
          onChange={(e) => handleChange(e)}
        />

        <button className="add-btn" onClick={() => 
        props.addTodo({         
            id: Math.floor(Math.random() * 1000),
            item: todo,
            completed: false
          }
        )}>Add</button>
        <br/>
        <ul>
          {
            props.todos.map(item => {
              return (
                <li key={item.id}>
                  {item.item}
                  <button onClick={() => props.delTodo(item.id)}>Delete</button>
                </li>
              )}
            )}
        </ul>
    </div>
  )
}

export default connect(mapStateToProps, MapDispatchToProps)(Todos);
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodos } from '../redux/reducer';

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

const Todos = (props) => {

  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  }

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
        )}>+</button>
        <br/>
       
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodos, completeTodos, removeTodos, updateTodos } from '../redux/reducer';
import TodoItem from './TodoItem';


const mapStateToProps = (state) => {
    return {
      todos: state,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      addTodo: (todo) => dispatch(addTodos(todo)),
      delTodo: (id) => dispatch(removeTodos(id)),
      updateTodo: (todo) => dispatch(updateTodos(todo)),
      completeTodo: (id) => dispatch(completeTodos(id)),
      
    }
  }

const DisplayTodos = (props) => {
  const [sort, setSort] = useState("active");

  return (
    <div className="displaTodos">
        <div className="buttons">
            <button onClick={() => setSort("active")}>Ativo</button>
            <button onClick={() => setSort("complete")}>Completo</button>
            <button onClick={() => setSort("all")}>Todos</button>
        </div>
        <ul>
          {props.todos.length > 0 && sort === "active"
            ? props.todos.map((item) => {
              return (
                  item.completed === false && (
                  <TodoItem
                    key={item.id}
                    item={item}
                    delTodo={props.delTodo}
                    updateTodo={props.updateTodo}
                    completeTodo={props.completeTodo}
                  />
                )
              )
          }) : null}
        </ul>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);
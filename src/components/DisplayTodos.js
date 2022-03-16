import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodos, completeTodos, removeTodos, updateTodos } from '../redux/reducer';
import { AnimatePresence, motion } from 'framer-motion';
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
    <div className="displayTodos">
        <div className="buttons">
            <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSort("active")}
            >
                  Ativo
            </motion.button>
            <motion.button 
                  onClick={() => setSort("complete")}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
            >
                    Feito
            </motion.button>
            <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSort("all")}>
                    Todos
            </motion.button>
        </div>
        <ul>
        <AnimatePresence>
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
           {props.todos.length > 0 && sort === "complete"
            ? props.todos.map((item) => {
              return (
                  item.completed === true && (
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
           {props.todos.length > 0 && sort === "all"
            ? props.todos.map((item) => {
              return (
                  <TodoItem
                    key={item.id}
                    item={item}
                    delTodo={props.delTodo}
                    updateTodo={props.updateTodo}
                    completeTodo={props.completeTodo}
                  />
                 )
          }) : null}
        </AnimatePresence>
        </ul>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);
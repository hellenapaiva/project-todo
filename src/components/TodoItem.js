import React, { useRef } from 'react';
import { AiFillEdit, AiOutlineClose} from 'react-icons/ai';
import { IoMdDoneAll} from 'react-icons/io';  

const TodoItem = (props) => {

  const { item, updateTodo, delTodo, completeTodo} = props
  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if(e.which === 13) {
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  }

  return (
    <li key={item.id} className="card">
    <textarea 
      ref={inputRef}
      disabled={inputRef}
      defaultValue={item.item}
      onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
    />
    <div className="btns">
      <button onClick={() => changeFocus()}><AiFillEdit/></button>
      <button onClick={() => completeTodo(item.id)} style={{color: "green"}}><IoMdDoneAll/></button>
      <button onClick={() => delTodo(item.id)} style={{color: "red"}}><AiOutlineClose/></button>
    </div>
    {item.completed && <span className="completed">done</span>}
  </li>
  )
}

export default TodoItem
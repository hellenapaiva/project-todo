import React, { useRef } from 'react';
import { AiFillEdit, AiOutlineClose} from 'react-icons/ai';
import { IoMdDoneAll} from 'react-icons/io';
import { motion } from 'framer-motion';  

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
    <motion.li 
    initial={{ x: "150vw", transition: { type: "spring", duration: 2 } }}
    animate={{ x: 0, transition: { type: "spring", duration: 2 } }}
    whileHover={{
      scale: 0.9,
      transition: { type: "spring", duration: 0.1 },
    }}
    exit={{
      x: "-60vw",
      scale: [1, 0],
      transition: { duration: 0.5 },
      backgroundColor: "rgba(255,0,0,1)",
    }}
        key={item.id} 
        className="card"
    >
    <textarea 
      ref={inputRef}
      disabled={inputRef}
      defaultValue={item.item}
      onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
    />
    <div className="btns">
      <motion.button 
          onClick={() => changeFocus()}
          whileHover={{scale: 1.3}}
          whileTap={{scale: 0.9}}
      >
            <AiFillEdit/>
      </motion.button>
     {item.completed === false &&
       <motion.button 
          whileHover={{scale: 1.3}}
          whileTap={{scale: 0.9}}
          onClick={() => completeTodo(item.id)} 
          style={{color: "green"}}>
            <IoMdDoneAll/>
        </motion.button>
     }
      <motion.button 
          whileHover={{scale: 1.3}}
          whileTap={{scale: 0.9}}
          onClick={() => delTodo(item.id)}
          style={{color: "red"}}
      >
              <AiOutlineClose/>
      </motion.button>
    </div>
    {item.completed && <span className="completed">done</span>}
  </motion.li>
  )
}

export default TodoItem
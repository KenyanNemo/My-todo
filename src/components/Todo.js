import React, {useState} from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

function Todo({ todos, completeTodo, removeTodo, updateTodo}) {
  const [todo, newTodo] = useState ({
    id: null,
    text: ''
  });

  const submitUpdate = text => {
    updateTodo(todo.id, text);
    newTodo({
      id: null,
      text: ''
    });

  };

  if (todo.id) {
    return <TodoForm todo={todo} onSubmit ={submitUpdate} />;
  }
  return todos.map((todo, index) => (
    <div 
    className ={todo.isComplete ? 'todo-row complete' : 'todo-row'}
    key={index}
    >
    <div key={todo.id} onClick={()=> completeTodo(todo.id)}>
     {todo.text}
    </div>
    <div className='icons'>
      <RiCloseCircleLine
        onClick={() =>removeTodo(todo.id)}
        className= 'delete-icon'
      />
      <TiEdit
        onClick={() =>newTodo({ id: todo.id, text:todo.text})}
        className= 'edit-icon'
      />
      </div>
    </div>
     

  ));
};

export default Todo;
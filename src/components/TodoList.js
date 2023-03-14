import React, {useState} from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        const newTodos = [todo, ...todos]

        setTodos(newTodos);
        console.log(todo,...todos);
    };

    const updateTodo = (todoId, newTodo) => {
        if (!newTodo.text || /^\s*$/.test(newTodo.text)) {
            return;
        }
        
        const updatedArray = [...todos].map(todo => todo.id === todoId ? newTodo : todo );
        
           // for (let todo in todos ) {
            //   if (todo.id == todoId) {updatedArray.push(newTodo) }
            //   else {updatedArray.push(todo)}};

         setTodos(updatedArray);
           
    };

    const completeTodo = todoId => {
      const completedArr = [...todos].map (todo => {
        if (todo.id == todoId) {todo.isComplete = true}
        return todo});
        // for (let todo in todos) {
        //   if(todo.id == todoId) {completedArr.push(todo.isComplete)}
        //   else {completedArr.push(todo)}}

      setTodos(completedArr);  
      };

    const removeTodo = todoId => {
      const removedArr =
       [...todos].filter(todo=>todo.id !== todoId );
        //     for (let todo in todos) {
    //       if (todo.id !== todoId) {removedArr.push(todo)}
    //     };
          
      setTodos(removedArr);
  
    };
              

  return (
    <>
    <h1> Agenda </h1>
    <TodoForm onSubmit={addTodo}/>
    <Todo
    todos={todos}
    completeTodo={completeTodo}
    updateTodo={updateTodo}
    removeTodo={removeTodo}
    />
    </>
  );
};

export default TodoList;
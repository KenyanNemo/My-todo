import React, {useState, useRef, useEffect } from 'react';

function TodoForm(props) {
    const [input, setInput] =useState(props.todo ? props.todo.text : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id:Math.floor(Math.random()* 10000),
            text: input
        });
        setInput('');
    };

  return (
    <form className= 'todo-form' onSubmit={handleSubmit} > 
      {props.todo ? (
        <>
          <input
            placeholder= 'Update'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
            type='text'
          />
        <button onClick={handleSubmit} className='todo-button edit'>
            Update
        </button>
        </>
    ): (
        <>
        <input
        value={input}
        onChange={handleChange}
        name='text'
        placeholder='Enter a Todo'
        className='todo-input'
        ref={inputRef}
        type='text'
        />
        <button onClick={handleSubmit} className='todo-button' >Add Todo</button>
        </>
    )}
    </form>
    );
};

export default TodoForm;
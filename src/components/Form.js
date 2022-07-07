import React, { useState } from 'react';
 
const Form = ({input,setInput,todo,setTodo}) => {

  const onInputChange=(event)=>{
    setInput(event.target.value);
    console.log(input)
  }
  const onSubmitHandler=(event)=>{
    setTodo([...todo,{
      title:input,
      completed:true
    }]);
    console.log('handling...')
    event.preventDefault()
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <textarea
       onChange={onInputChange}
       value={input}
       required 
      /><br/>
      <button type='submit'>todo</button>
    </form>
  );
};

export default Form;
 
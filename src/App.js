import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todolist from './Components/Todolist';
import './App.css';
import db from './firebase'; 
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('todos').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id ,todo: doc.data().todo})))
    })
  }, []);

  const addTodo = (event) => {
    event.preventDefault(); //prevents refreshing of page when we hit enter
    
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    
    setTodos([...todos, input]);
    setInput('');  //clear up the input after clicking add todo button
  }

  const h1Style = {
    fontFamily: "Algerian",
    color: "purple"
  };

  return (
    <div className="App">
      <h1 style={h1Style}>What To Do ? </h1>
      <form>
        <FormControl>
          <InputLabel>What are you upto ?</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>

        <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={addTodo}>Add Todo</Button>
      </form>
      <ul>
        {todos.map(todo => (
          <Todolist todo={todo}/>
        ))}
      </ul>

    </div>
  );
}

export default App;
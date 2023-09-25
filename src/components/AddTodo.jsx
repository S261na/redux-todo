// jsx- расширение языка
import React, { useState } from "react";
import { useDispatch } from "react-redux";
// дистпечер - говорим что мы хотим вызвать и что нужно передать*/

import { addTodo } from "../store/todoSlice";
import {  Alert, AlertTitle, Button, TextField } from "@mui/material";



const AddTodo = () => {
  const [todoContent, settodoContent] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const dispatch = useDispatch();
 
  function createTodo() {
    if (!todoContent.trim()) {
        setShowAlert(true); 
        return;
      } 

    let newTodo = {
      id: Date.now(),
      body: todoContent,
      status: false, // нужен для того, чтобы понять это действие уже выполнено или нет
    };

    dispatch(addTodo(newTodo));

    settodoContent("");
  }

  return (
    <div>
     <strong><h3>CREATE TODO</h3></strong>
      {showAlert && (
        <Alert severity="info">
          <AlertTitle>INPUT ERROR</AlertTitle>
          INPUTS IS — <strong>EMPTY!</strong>
        </Alert>
      )}
      <TextField fullWidth label="CREATE TODO" id="fullWidth" onChange={(e) => settodoContent(e.target.value)}
        value={todoContent} />
      <Button variant="contained"  onClick={createTodo}>
        CREATE
      </Button>
    </div>
  );
};

export default AddTodo;

// addTodo(obj) - X
// dispatch(addTodo(obj)) -> action.payload

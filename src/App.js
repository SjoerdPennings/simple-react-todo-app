import React from 'react';
import { useState, useEffect } from 'react';
import {v4 as uuidv4} from 'uuid';
import List from './components/List.js';
import { Input } from './components/Input.js';

export default function App() {
  //State vars
  const [list, setList] = useState([]);
  const [id, setId] = useState(0);
  const [loaded, setLoaded] = useState(false);

  //On first load, read session
  useEffect(() => {
    if (loaded == false) {
      let data = window.localStorage.getItem('todo_list') ? window.localStorage.getItem('todo_list') : '[]' ;
      setList(JSON.parse(data));
      setLoaded(true);
    }
  }, []);

  //On re-render, save session
  useEffect(() => {
    if (loaded == true) {
      window.localStorage.setItem('todo_list', JSON.stringify(list));
    }
  }, [list]);

  //Add
  function addTask() {
    let task_name = document.getElementById('task_name').value;
    let task_priority = document.getElementById('task_priority').value;
    let task_date = document.getElementById('task_date').value;
    setList(
      list.concat({
        id: uuidv4(),
        name: task_name,
        priority: task_priority,
        date: task_date,
        checked: false,
      })
    );
    setId(id + 1);
  }

  //Delete
  function deleteTask(id) {
    setList(list.filter((task) => task.id != id));
  }

  //Check
  function checkTask(id) {
    setList(list.map((task) => task.id == id
      ? { ...task, checked: !task.checked }
      : task,
    ));
  }

  //Render layout
  return (
    <div className='container'>
      <h1 className='text-center'>To-Do List</h1>
      <hr/>
      <Input onAdd={addTask} />
      <List deleteTask={(id) => deleteTask(id)} checkTask={(id) => checkTask(id)} list={list} />
    </div>
  );
}

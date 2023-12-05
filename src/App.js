import React from 'react';
import { useState } from 'react';
import './style.css';
import List from './components/List.js';
import { Input } from './components/Input.js';

export default function App() {
  const [list, setList] = useState([]);
  const [id, setId] = useState(0);

  function addTask() {
    let task_name = document.getElementById('task_name').value;
    setList(
      list.concat({
        id: id,
        name: task_name,
      })
    );
    setId(id + 1);
  }

  function deleteTask(id) {
    setList(list.filter((task) => task.id != id));
  }

  return (
    <div>
      <Input onAdd={addTask} />
      <List deleteTask={(id) => deleteTask(id)} list={list} />
    </div>
  );
}

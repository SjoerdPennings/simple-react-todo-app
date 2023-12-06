import React from 'react';
import { Task } from './Task.js';

export default function List({ list, deleteTask, checkTask }) {
  return (
    <ul className='list-group'>
      {list.map((task) => {
        return <Task key={task.id} checkTask={(id) => checkTask(id)} deleteTask={(id) => deleteTask(id)} task={task} />;
      })}
    </ul>
  );
}

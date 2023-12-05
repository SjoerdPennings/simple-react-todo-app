import React from 'react';
import { useState } from 'react';
import { Task } from './Task.js';

export default function List({ list, deleteTask }) {
  return (
    <ul>
      {list.map((task) => {
        return <Task deleteTask={(id) => deleteTask(id)} task={task} />;
      })}
    </ul>
  );
}

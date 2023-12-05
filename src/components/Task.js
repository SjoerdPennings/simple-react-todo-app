import React from 'react';
import { useState } from 'react';

export function Task({ task, deleteTask }) {
  return (
    <>
      <li>
        {task.name}
        <button class='delete' onClick={() => deleteTask(task.id)}>x</button>
      </li>
    </>
  );
}

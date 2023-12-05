import React from 'react';
import { useState } from 'react';

export function Task({ task, deleteTask }) {
  return (
    <>
      <li>
        {task.name}
        <button onClick={() => deleteTask(task.id)}>x</button>
      </li>
    </>
  );
}

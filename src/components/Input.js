import React from 'react';
import { useState } from 'react';

export function Input({ onAdd }) {
  return (
    <>
      Name: <input id="task_name" type="text" />
      <button onClick={onAdd}>+</button>
    </>
  );
}

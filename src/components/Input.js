import React from 'react';
import { useState } from 'react';

export function Input({ onAdd }) {
  return (
    <>
      <div className="col-md-12 input-group mb-3">
        <input className='w-50 form-control' id="task_name" type="text" placeholder='Name'/>
        <select className="form-select" id="task_priority" defaultValue=''>
          <option value='' disabled hidden>Priority</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
          <option value="None">None</option>
        </select>
        <input type="date" id="task_date" className="form-control" placeholder="Due date" />
        <button className='btn btn-primary' onClick={onAdd}><i className="fa fa-plus"></i></button>
      </div>
    </>
  );
}

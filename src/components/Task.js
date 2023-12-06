import React from 'react';
import { useState } from 'react';

export function Task({ task, deleteTask, checkTask }) {
  return (
    <>
      <li className='list-group-item clearfix'>
        <div className="row">
          <div className="col">
            <input type="checkbox" onClick={() => checkTask(task.id)} className="form-check-input me-1" id="task-checked" defaultChecked={task.checked}/>
            {task.checked == true ? (
              <s>{task.name}</s>
            ) : 
              task.name
            }
          </div>

          {task.priority != '' ? (
            <div className="col">
              {task.checked == true ? (
                <s>{task.priority}</s>
              ) : 
                task.priority
              }
            </div>
          ) : null}

          {task.date != '' ? (
            <div className="col">
              {task.checked == true ? (
                <s>{task.date}</s>
              ) : 
                task.date
              }
              <button className='badge bg-danger float-end rounded-pill border-1' onClick={() => deleteTask(task.id)}><i className="fa fa-trash"></i></button>
            </div>
          ) : (
            <div className="col justify-content-end">
              <button className='badge bg-danger float-end rounded-pill border-1' onClick={() => deleteTask(task.id)}><i className="fa fa-trash"></i></button>
            </div>
          )}
        </div>   
      </li>
    </>
  );
}

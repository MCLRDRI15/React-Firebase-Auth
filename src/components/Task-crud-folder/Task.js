import React, { useEffect, useState } from "react";
import Addtasks from "../Task-crud-folder/Addtasks";
import { FaWindowClose, FaPencilAlt } from "react-icons/fa";
import {toast} from "react-toastify";
import { db } from "../../firebase";
import "./Task.css";

const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [currentId, setCurrentId] = useState('');

  const AddorEditlink = async (linkObject) => {
    if(currentId === ''){
        await db.collection("tasks").doc().set(linkObject);
        console.log("New Task Added");
        toast('New Task Added', {type: 'success', autoClose: 2000});
    }else{
        await db.collection('tasks').doc(currentId).update(linkObject);
        toast('Task Updated Successfully', {type: 'info', autoClose: 2000});
        setCurrentId('');
    }
  };

  const onDeleteTask = async(id) => {
      if(window.confirm('Are you sure you want to delete this Task ?')){
         await db.collection("tasks").doc(id).delete();
         console.log('task deleted...')
         toast('task deleted...', {type: 'error', autoClose: 2000});
      }
  };

  const getTasks = () => {
    db.collection("tasks").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        docs.push({ ...doc.data(), id: doc.id });
      });
      setTasks(docs);
    });
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="tasks-list">
      <Addtasks {...{AddorEditlink, currentId, tasks}} />
      <div className="container-task">
        {tasks.map((task, index) => {
          return (
            <div className="task-card" key={task.id}>
              <div className="card-body">
                <h3>{task.Title}</h3>
                <h4>{task.type}</h4>
                <p>{task.description}</p>
                <div className="cards-buttons">
                  <FaWindowClose
                    className="close-card-button"
                    onClick={() => onDeleteTask(task.id)}
                  />
                  <FaPencilAlt
                  className="edit-pencil"
                  onClick={() => setCurrentId(task.id)}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Task;

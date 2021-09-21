import React, {useState, useEffect} from "react";
import { db } from "../../firebase";
import "./Addtasks.css";

const Addtasks = (props) => {

    const initialState = {
        Title: '',
        type: '',
        description: '',
    }

    const [taskData, setTaskData] = useState(initialState);

    const handleInputChange = (event) =>{
        const {name, value} = event.target;
        setTaskData({...taskData, [name]:value})
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        props.AddorEditlink(taskData);
        setTaskData({...initialState});
    }

    const getTaskById = async(id) => {
       const doc = await db.collection("tasks").doc(id).get();
       setTaskData({...doc.data()});
    }

    useEffect(()=> {
        if(props.currentId === ''){
            setTaskData({...initialState});
        }else{
            getTaskById(props.currentId)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.currentId])

    return (
        <div className="container-tasks">
            <form className="card-header" onSubmit={handleSubmit}>
                <span className="task-title">Tittle: </span><br/>
                <input name="Title" type="text" placeholder="Add a Task Title" className="task-title-input" onChange={handleInputChange} value={taskData.Title} /><br/>
                <span className="task-type">Type: </span><br/>
                <input name="type" type="text" placeholder="Kind of Task" className="task-type-input" onChange={handleInputChange}  value={taskData.type} /><br/>
                <span className="task-description">Description: </span><br/>
                <textarea name="description" type="text" rows="3" placeholder="Tasks description" className="task-description-input" onChange={handleInputChange}  value={taskData.description} /><br/>
                <button className="save-button" >
                    {props.currentId === '' ? 'Save' : 'Update'}
                </button>
            </form>
        </div>
    );
}

export default Addtasks;
import React from 'react'
import './App.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Create({ onTaskAdded }) {
    const [task, setTask] = React.useState('')

    const handleCreate = () => {
        if (!task.trim()) {
            toast.error("Please enter a task!", {
                position: "top-right",
                autoClose: 3000
            });
            return;
        }

        axios.post('http://localhost:5001/create', { task: task })
            .then((response) => {
                toast.success("Task added successfully!", {
                    position: "top-right",
                    autoClose: 3000
                });
                setTask('');
                if (onTaskAdded) {
                    onTaskAdded(response.data);
                }
            })
            .catch(err => {
                console.log(err);
                toast.error("Failed to add task!", {
                    position: "top-right",
                    autoClose: 3000
                });
            });
    }
    
    return (
        <div className='create-form'>
            <input 
                type="text" 
                value={task}
                placeholder="Add a new task" 
                onChange={(e) => setTask(e.target.value)} 
            />
            <button type="button" onClick={handleCreate}>
                Add to List
            </button>
        </div>
    )
}

export default Create
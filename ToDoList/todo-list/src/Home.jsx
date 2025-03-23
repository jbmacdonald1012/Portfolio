import React, { useEffect } from 'react'
import { BsCircleFill, BsFillTrashFill, BsFillCheckCircleFill } from 'react-icons/bs'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Create from './Create'
import axios from 'axios'

function Home() {
    
    const [todoList, setTodoList] = React.useState([])
    
    useEffect(() => {
        axios.get('http://localhost:5001/get')
            .then(result => setTodoList(result.data))
            .catch(err => console.log(err))
    }, [])

    const handleUpdate = (id) => {
        const currentTask = todoList.find(task => task._id === id);
        const newIsComplete = !currentTask.isComplete;
    
        axios.put(`http://localhost:5001/update/${id}`, { isComplete: newIsComplete }) 
            .then(() => {
                const updatedList = todoList.map(task => {
                    if (task._id === id) {
                        return { ...task, isComplete: newIsComplete };
                    }
                    return task;
                });
                setTodoList(updatedList);
                toast.success('Task updated successfully!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                });
            })
            .catch(err => {
                console.log(err);
                toast.error('Failed to update task!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                });
            });
    }
    const handleTaskAdded = (newTask) => {
        setTodoList([...todoList, newTask]);
    }

    const handleRemove = (id) => {
        axios.delete(`http://localhost:5001/delete/${id}`)
            .then(() => {
                const updatedList = todoList.filter(task => task._id !== id);
                setTodoList(updatedList);
                toast.success('Task removed successfully!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                });
            })
            .catch(err => {
                console.log(err);
                toast.error('Failed to remove task!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                });
            });
    };

  return (
    <div className='home'>
        <ToastContainer 
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <h2>To Do List</h2>
            <Create onTaskAdded={handleTaskAdded}/>
        {
            todoList.length === 0 
            ? 
            <div>
                <h3>No items in the list</h3>
            </div> 
            :
            todoList.map(item => (
                <div className="task" key={item._id}>
                    <div className="checkbox" onClick={() => handleUpdate(item._id)}>
                       { item.isComplete ? 
                            <BsFillCheckCircleFill></BsFillCheckCircleFill>
                            :
                            <BsCircleFill className="icon" />
                       }
                        <p className={item.isComplete ? "line_through" : ""}>{item.task}</p>
                    </div>
                    <div>
                        <span><BsFillTrashFill className="icon" onClick={() => handleRemove(item._id)}/></span>
                    </div>
                </div>

            ))
        }
    </div>
  )
}

export default Home

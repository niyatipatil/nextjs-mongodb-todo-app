import UserContext from '@/context/userContext';
import { RxCross2 } from "react-icons/rx";
import React, { useContext } from 'react';

const Task = ({ task, deleteTaskPar }) => {
    const { user } = useContext(UserContext);

    function deleteTask(taskId){
        deleteTaskPar(taskId); //N
    }

  return (
    <div className= {` shadow-md ${
        task.status == "completed" ? "bg-green-700" : "bg-purple-800" 
        }`}>
        {/* coditional render if task complete - change bg color */}
        <div className="p-6">
            <h1 className="font-bold text-2xl text-white">
                {task.title}
            </h1>
            <span className="cursor-pointer flex justify-center items-center rounded-full bg-purple-800 shadow-md w-8 h-8 hover:bg-purple-950" 
            onClick={() => {deleteTask(task._id)}}>
                <RxCross2/>
            </span>
            <p className="font-medium">
                {task.content}
            </p>
            <div className="mt-4 flex justify-between">
                <p className="text-left">
                    Status:{" "}
                    <span className="font-bold">{task.status.toUpperCase()}</span>
                </p>
                <p className="text-right">
                    Creator: <span className="font-medium">{user?.name}</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Task
import UserContext from '@/context/userContext';
import { RxCross2 } from "react-icons/rx";
import { TfiWrite } from "react-icons/tfi";
import React, { useContext } from 'react';
import AddTask from '../create-task/AddTask';
import { useRouter } from 'next/navigation';

const Task = ({ task, deleteTaskPar }) => {
    const { user } = useContext(UserContext);
    const router = useRouter();

    function deleteTask(taskId){
        deleteTaskPar(taskId); //N
    }

  return (
    <div className= {` rounded-lg mb-2 shadow-md ${
        task.status == "completed" ? "bg-green-500" : "bg-purple-700" 
        }`}>
        {/* coditional render if task complete - change bg color */}
        <div className="p-6">
            <div className="flex justify-between mb-3">
            <h1 className="font-bold text-2xl text-white">
                {task.title}
            </h1>
            <span className="cursor-pointer flex justify-center items-center rounded-full bg-white shadow-md w-8 h-8 hover:bg-transparent hover:border-2 hover:border-red-600" 
            onClick={() => {deleteTask(task._id)}}>
                <RxCross2/>
            </span>
            </div>
            <div className="flex justify-between mb-3">
            <p className="font-semibold text-white">
                {task.content}
            </p>
            <span className="cursor-pointer flex justify-center items-center rounded-full bg-white shadow-md w-8 h-8 hover:bg-transparent hover:border-2 hover:border-red-600" 
            onClick={() => {router.push("/create-task?task_id=" + task._id)}}>
                <TfiWrite/>
            </span>
            </div>
            <div className="mt-3 flex justify-between text-white">
                <p className="text-left font-semibold">
                    Status:{" "}
                    <span className="font-bold">{task.status.toUpperCase()}</span>
                </p>
                <p className="text-right font-semibold">
                    Creator: <span className="">{user?.name}</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Task
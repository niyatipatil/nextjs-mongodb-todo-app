"use client";
import React, { useState } from 'react'
import Image from 'next/image';
import createTsk from '../../assets/add-task.png';
import { addTask } from '@/services/taskServices';
import { toast } from 'react-toastify';

const AddTask = () => {
  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "none",
    //temp setting id
    userId: "667bdc30947a4c271d0d71db",
  });

  const handleAddTask = async (event) => {
    event.preventDefault();
    console.log(task);
    //v
    try{
      const result = await addTask(task)
      console.log(result)
      toast.success("Your task is added successfully!", {
        position: "top-right",
      });

      setTask({
        title: "",
        content: "",
        status: "none",
      })
    }catch(error){
      console.log(error);
      toast.error("Failed to add your task!", {  
        position: "top-right",
        })
    }
  };

  //added for clear
  const handleClear = (event) => {
    event.preventDefault();
    setTask({
      title: "",
      content: "",
      status: "none",
      userId: "667bdc30947a4c271d0d71db",
    });
  };
  
  return (
    <div className="grid grid-cols-12 mt-2 justify-center">
      <div className="col-span-4 col-start-5 p-5 shadow-sm">
        <div className="mb-3 flex justify-center">
        <Image src={createTsk}
        style={{
          width: '30%',
        }}
        alt='create task image'
        />
        </div>

        <h1 className="text-3xl text-center font-semibold">Create your task here!</h1>
        <form action="#!" onSubmit={handleAddTask}>
          {/*Task Title*/}
          <div className="mt-5">
            <label htmlFor="task_title" className="block mb-2 font-semibold">
              TITLE
            </label>
            <input type="text" id="task_title" className="w-full p-2 text-white bg-gray-700 border border-black rounded-lg" 
            name="task_title"
            onChange={(event)=>{
              setTask({
                ...task, 
                title: event.target.value 
              });
            }}
            value={task.title}
            />
          </div>
          {/*Task Description*/}
          <div className="mt-4">
            <label htmlFor="task_content" className="block mb-2 font-semibold">
              DESCRIPTION
            </label>
            <textarea type="text" id="task_content" rows={4} className="w-full p-2 text-white bg-gray-700 border border-black rounded-md"
            name="task_content"
            onChange={(event)=>{
              setTask({
                ...task, 
                content: event.target.value 
              });
            }}
            value={task.content}
            />
          </div>
          {/*Task Status*/}
          <div className="mt-4">
            <label htmlFor="task_status" className="block mb-2 font-semibold">
              STATUS
            </label>
            <select id="task_status" className="w-full p-2 text-white bg-gray-700 border border-black rounded-md"
             name="task_status"
             onChange={(event)=>{
               setTask({
                 ...task, 
                 status: event.target.value 
               });
             }}
             value={task.status} //2way data binding
            > 
              <option value="none" disabled>Select the Status</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          {/*Button*/}
          <div className="mt-8">
            <button className="bg-purple-800 py-2 px-3 rounded-lg font-semibold hover:bg-purple-900 mr-4">Create Task</button>
            <button type="button" onClick={handleClear} className="bg-red-600 py-2 px-3 rounded-lg font-semibold hover:bg-red-700">Clear</button>
          </div>
          {/*{JSON.stringify(task)}*/}
        </form>
      </div>
    </div>
  )
}

export default AddTask;
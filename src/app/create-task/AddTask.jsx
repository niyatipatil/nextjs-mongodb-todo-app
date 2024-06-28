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
    userId: "667d1d47c6776b4e91963e32",
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
        //dk
        //userId: "667d1d47c6776b4e91963e32",
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
      userId: "667d1d47c6776b4e91963e32",
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

        <h1 className="text-3xl text-center font-semibold text-white">Create your task here!</h1>
        <form action="#!" onSubmit={handleAddTask}>
          {/*Task Title*/}
          <div className="mt-5">
            <label htmlFor="task_title" className="block mb-2 font-semibold text-white">
              TITLE
            </label>
            <input type="text" id="task_title" className="w-full p-2 text-black font-semibold bg-white border border-gray-700 rounded-lg" 
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
            <label htmlFor="task_content" className="block mb-2 font-semibold text-white">
              DESCRIPTION
            </label>
            <textarea type="text" id="task_content" rows={4} className="w-full p-2 text-black font-semibold bg-white border border-gray-700 rounded-md"
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
            <label htmlFor="task_status" className="block mb-2 font-semibold text-white">
              STATUS
            </label>
            <select id="task_status" className="w-full p-2 text-black font-semibold bg-white border border-gray-700 rounded-md"
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
              <option value="pending">pending</option>
              <option value="completed">completed</option>
            </select>
          </div>

          {/*Button*/}
          <div className="mt-8">
            <button className="bg-green-600 py-2 px-3 rounded-lg text-white font-bold hover:bg-transparent hover:border-2 hover:border-green-600 mr-4">Create Task{" "}</button>
            <button type="button" onClick={handleClear} className="bg-red-600 text-white py-2 px-3 rounded-lg font-bold hover:bg-transparent hover:border-2 hover:border-red-600">Clear</button>
          </div>
          {/*{JSON.stringify(task)}*/}
        </form>
      </div>
    </div>
  )
}

export default AddTask;
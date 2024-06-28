"use client";
import React, { useContext, useEffect, useState } from "react";
import UserContext from "@/context/userContext";
import Task from "./Task";
import { toast } from "react-toastify";
import { getTasksOfUser , deleteTask } from "@/services/taskServices";

const ShowTasks = () => {
  const [tasks, setTasks] = useState([]);
  const context = useContext(UserContext);

  async function loadTasks(userId) {
    try {
      const tasks = await getTasksOfUser(userId);
      setTasks([...tasks].reverse());
      console.log(tasks);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (context.user) {
      console.log(JSON.stringify(context.user))
      loadTasks(context.user._id);
    }
  }, [context.user]);

  async function deleteTaskPar(tasksId) {
    try {
      const result = await deleteTask(tasksId);
      console.log(result);
      const newTasks = tasks.filter((item) => item._id != tasksId); //no refresh needed
      setTasks(newTasks);
      toast.success("Task Deleted!");
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete the Task!");
    }
  }

  return (
    <div className="grid grid-cols-12 mt-10">
      <div className="col-span-6 col-start-4">
        <h1 className="text-3xl mb-4 font-bold text-center text-white">All Tasks: ({tasks.length})</h1>

        {tasks.map((task) => (
          <Task
            task={task}
            key={task._id}
            deleteTaskPar={deleteTaskPar}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowTasks;
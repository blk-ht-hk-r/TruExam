import React, { useState, useEffect } from "react";
import TasksCard from "./TasksCard/TasksCard";
import initialData from "./initialData";

const Tasks = () => {
   const [tasks, setTasks] = useState([]);
   

   useEffect(() => {
      const getTasks = localStorage.getItem("data");
      const initialTasks = initialData

      if (getTasks) {
         setTasks([...initialTasks, ...JSON.parse(getTasks)]);
      }
   }, []);

   const TasksAll = tasks.map((EachTask, i) => (
      <TasksCard task={EachTask} key={i} index={i} />
   ));

   return <div>{TasksAll}</div>;
};

export default Tasks;

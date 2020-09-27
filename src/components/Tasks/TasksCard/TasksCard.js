import React from "react";
import { Link } from "react-router-dom";
import "./TasksCard.css";
const TasksCard = ({ task, index }) => {
   const details = task.detail.split("\n").map((line, i) => 
      <div key={i} className="detail">{line}</div>
   );
   
   return (
      <div className="sub_cont">
         <div className="sub">
            <img src={task.url} alt="Uploases Tasks" className="img" />
            <h1>{task.taskName}</h1>
            {details}
            <button className="but">
               <Link to={`/tasks/${index}`}>View Submissions</Link>
            </button>
         </div>
      </div>
   );
};

export default TasksCard;

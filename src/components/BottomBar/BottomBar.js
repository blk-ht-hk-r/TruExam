import React from "react";
import { Link } from 'react-router-dom'
import "./BottomBar.css";

const BottomBar = () => {
   return (
      <div className="bottom_cont">
         <div className="bottom">
            <div className="con">
            <div className="c_con">
                  <div>
                     <i class="fas fa-paint-brush"></i>
                  </div>
                  <Link to="/createTask">Add Task</Link>
               </div>
            </div>
            <div className="con">
               <div className="c_con">
                  <div>
                     <i class="fas fa-angle-up"></i>
                  </div>
                  <Link to="/tasks">View Task</Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default BottomBar;

import React from "react";
import { Link, useParams } from "react-router-dom";

const Landing = () => {
   return (
      <>
         <div className="landing_image">  <div className="head">
            <h2>Welcome Instructor,</h2>
         </div> </div>
       
         <div id="landing_cont">
            <div id="landing">
               <button className="landingBut">
                  <Link to="/createTask">Add a New Task</Link>
               </button>
               <button className="landingBut">
                  <Link to="/tasks">View All Tasks</Link>
               </button>
            </div>
         </div>
      </>
   );
};

export default Landing;

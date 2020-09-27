import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Submission from "./Submission/Submission";

const Task = () => {
   const { id } = useParams();

   const students = ["Rishi", "Mudit", "Ankit"];

   const submission1 = students.map((student, i) => (
      <Submission
         student={student}
         image={require(`../../images/task1/${i + 1}.jpg`)}
         index={i}
         key={i}
      />
   ));

   const submission2 = students.map((student, i) => (
      <Submission
         student={student}
         image={require(`../../images/task2/${i + 1}.jpg`)}
         index={i}
         key={i}
      />
   ));

   return (
      <div classsname="container">
         {id === "0" ? submission1 : null}
         {id === "1" ? submission2 : null}
         {id !== "0" && id !== "1" ? (
            <>
               <h3>This Task has No Submissions yet</h3>
               <div>Please check other tasks submission and score them...</div>
               <button className="but">
                  <Link to="/tasks/0">Task 1</Link>
               </button>
               <button className="but" style={{marginLeft : "1rem"}}>
                  <Link to="/tasks/1">Task 2</Link>
               </button>
            </>
         ) : null}
      </div>
   );
};

export default Task;

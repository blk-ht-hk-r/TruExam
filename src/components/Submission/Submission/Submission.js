import React from "react";
import ScoreButton from "../ScoreButton/ScoreButton";
import './Submission.css'

const Submission = ({ student, image, index: i }) => {
   return (
      <>
         <h2 className="student_name">
            {i + 1}. {student}
         </h2>
         <div className="image_con">
            <div className="images">
               <img src={image} alt="" className="taskimg sub_img"/>
               <ScoreButton />
               <i className="fas fa-download"></i>
               <a href={image} download className="save-btn">
                  {` Save`}
               </a>
            </div>
         </div>
      </>
   );
};

export default Submission;

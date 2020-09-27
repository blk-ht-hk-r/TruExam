import React, { useState } from "react";
import './ScoreButton.css'

const ScoreButton = () => {
   const [score, setScore] = useState();
   const [isSubmit, setIsSubmit] = useState(false)

   return (
      <div>
         {!score ? (
            <button className="scoreBut" onClick={() => setScore(1)}>
               Score
            </button>
         ) : (
            <>
               {!isSubmit ? (
                  <>
                     <div>
                        <button
                           className="added"
                           onClick={() =>
                              setScore((prevScore) => prevScore - 1)
                           }
                        >
                           <i class="fas fa-minus"></i>
                        </button>
                        <span className="adde">{score}</span>
                        <button
                           className="added"
                           onClick={() =>
                              setScore((prevScore) => prevScore + 1)
                           }
                        >
                           <i class="fas fa-plus"></i>
                        </button>
                     </div>
                     <div>
                        <button onClick={() => setIsSubmit(true)} className="submitBtn">
                           Submit
                        </button>
                     </div>
                  </>
               ) : (
                  <div className="scores">
                     <div>Score</div>
                     <div>{score}</div>
                  </div>
               )}
            </>
         )}
      </div>
   );
};

export default ScoreButton;

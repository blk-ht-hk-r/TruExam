import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./CreateTask.css";

function App() {
   const [imageArray, setImageArray] = useState([]);
   const [input, setInput] = useState({});
   const history = useHistory();

   const imageURL = (files) => {
      var reader = new FileReader();
      reader.addEventListener("load", () => {
         document.getElementById("upimage").src = reader.result;
         document.getElementById("upimage").style.display = "block";
         setInput({ ...input, url: reader.result });
      });
      reader.readAsDataURL(files[0]);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      setImageArray([...imageArray, input]);
      setInput({});
      document.getElementById("upimage").style.display = "none";
   };

   useEffect(() => {
      localStorage.setItem("data", JSON.stringify(imageArray));
      if (imageArray.length !== 0) {
         history.push("/tasks");
      }
   }, [imageArray]);

   return (
      <div className="CreateTask">
         <header className='head1'><h1>TruExam</h1></header>
         <div className="container">
            {" "}
            <div className="upload">
               <div>
                  <img id="upimage" alt="View Your Upload" />
               </div>
               <form onSubmit={handleSubmit}>
                  <label className="custom-file-upload">
                     <input
                     className="input"
                        type="file"
                        onChange={(e) => imageURL(e.target.files)}
                        required
                     />
                     Choose File...
                  </label>
                  <input
                    className="input"
                     type="text"
                     placeholder="Task Name"
                     value={input.taskName || ""}
                     onChange={(e) =>
                        setInput({ ...input, taskName: e.target.value })
                     }
                     required
                  ></input>
                  <textarea
                  className='input'
                     type="text"
                     placeholder="Details"
                     value={input.detail || ""}
                     onChange={(e) =>
                        setInput({ ...input, detail: e.target.value })
                     }
                     required
                  ></textarea>
                  <button className="addInput">+</button>
               </form>
            </div>
         </div>
      </div>
   );
}

export default App;

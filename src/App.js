import React, { useState, useEffect } from "react";
import View from "./View";
import "./App.css";

function App() {
  const [schema, setSchema] = useState([]);
  const [details, setDetails] = useState("");
  const [task, setTask] = useState("");
  const [url, setUrl] = useState("");
  const [dat, setData] = useState([]);
  const imageURL = (files) => {
    var reader = new FileReader();
    reader.addEventListener("load", () => {
      document.getElementById("image").src = reader.result;
      document.getElementById("image").style.display = "block";
      setUrl(reader.result);
    });
    reader.readAsDataURL(files[0]);
  };
  const upload = () => {
    const data = {
      detail: details,
      taskName: task,
      urls: url,
      points: 0,
    };
    setData([...dat, data]);
    localStorage.setItem("data", JSON.stringify(data));
    setDetails("");
    setTask("");
  };
  useEffect(() => {
    setSchema(JSON.parse(localStorage.getItem("data")));
  }, [dat]);

  return (
    <div className="App">
      <header>TruExam</header>
      <div className="container">
        {" "}
        <div className="upload">
          <div>
            <img id="image" alt="View Your Upload" />
          </div>
          <label className="custom-file-upload">
            <input
              type="file"
              id="image"
              onChange={(e) => imageURL(e.target.files)}
            />
            Choose File...
          </label>
          <input
            type="text"
            placeholder="Details"
            onChange={(e) => setDetails(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Task Name"
            onChange={(e) => setTask(e.target.value)}
          ></input>
          <button className="add" onClick={upload}>
            +
          </button>
        </div>
        <div className="view">
          <View schema={schema} />
        </div>
      </div>
    </div>
  );
}

export default App;

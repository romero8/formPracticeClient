import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/style/Create.css";

export function Create() {
  const [inputData, setInputData] = useState({
    age: "",
    email: "",
  });

  const navigate = useNavigate();

  function handle(e) {
    console.log(JSON.stringify(inputData));
    e.preventDefault();
    fetch("/users/create", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body:JSON.stringify(inputData)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        alert("Data Posted successfully!");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

 
  return (
    <div className="createContainer">
      <form onSubmit={handle} className="formContainer">
        <label>Age: </label>
        <input
          type={"number"}
          onChange={(e) => {
            setInputData({ ...inputData, age: e.target.value });
          }}
        />
        <label>Mail: </label>
        <input
          onChange={(e) =>
            setInputData({ ...inputData, email: e.target.value })
          }
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

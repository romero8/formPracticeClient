import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../components/style/Create.css";

export function Update() {
  const { id } = useParams();

  const [inputData, setInputData] = useState({
    age: "",
    email: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setInputData(data);
      });
  }, []);



  function handle(e) {
    console.log(JSON.stringify(inputData));
    e.preventDefault();
    
    
    fetch('/users/update', {
        mode: "cors",
        method: "PUT",
        headers: {
          "Content-Type":"application/json"
        },
        body:JSON.stringify(inputData)
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Data Updated successfully!");
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
          value={inputData.age}
          type={"number"}
          onChange={(e) => {
            setInputData({ ...inputData, age: e.target.value });
          }}
        />
        <label>Mail: </label>
        <input
          value={inputData.email}
          onChange={(e) =>
            setInputData({ ...inputData, email: e.target.value })
          }
        />
        <button>Update</button>
      </form>
    </div>
  );
}

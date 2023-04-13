import React, { useEffect, useState } from "react";
import "../components/style/Home.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export function Home() {
  const navigate = useNavigate();
  const [data, setData] = useState([{}]);
  useEffect(() => {
    fetch("/users")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, [data]);

  

  function handleDelete(user) {
    const confirm = window.confirm("u gonna delete u know");

    if (confirm) {
      fetch("/users/delete", {
        mode: "cors",
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          alert("Deleted");
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <div>
      <Link to={"/create"} className="createBtn">
        Create +
      </Link>

      <table className="table">
        <thead className="tableTitle">
          <tr>
            <td>name</td>
            <td>age</td>
            <td>email</td>
            <td>action</td>
          </tr>
        </thead>

        <tbody>
          {data.map((user) => {
            return (
              <tr>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
                <td>
                  <Link to={`/update/${user.name}`}>Update</Link>
                  <button onClick={(e) => handleDelete(user)}>Delete</button>
                  <Link>Watch</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

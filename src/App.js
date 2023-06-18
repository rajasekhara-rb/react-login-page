import React, { useState } from "react";
import data from "./data"
import Login from "./Login";

function App() {
  const userLogin = {
    username: "reddy@gmail.com",
    password: "123456"
  }

  const [user, setUser] = useState({ email: "" });

  const loginUserFn = (details) => {
    if (details.username === userLogin.username && details.password === userLogin.password) {
      setUser({ email: details.username })
      console.log(user);
    } else {
      alert("Invalid crendentials, please check username or password")
    }
  }

  return (
    <div className="">
      {user.email ? (
        <>
          <h5 className="bg-secondary text-dark text-center m-0 p-4">User Details</h5>

          <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Gender</th>
                <th scope="col">Email</th>
                <th scope="col">Phone No</th>
              </tr>
            </thead>
            <tbody>
              {data.users.map(u => (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.name}</td>
                  <td>{u.age}</td>
                  <td>{u.gender}</td>
                  <td>{u.email}</td>
                  <td>{u.phoneNo}</td>

                </tr>
              ))}

            </tbody>
          </table>
        </>


      ) : (

        <Login loginUserFn={loginUserFn} error={alert} />
      )}

    </div>



  )

}

export default App;

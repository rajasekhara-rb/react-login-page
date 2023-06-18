import React, { useState } from "react";

function Login({ loginUserFn, error }) {

    const [details, setDetails] = useState({ username: "", password: "" });

    const handleSubmit = (e) => {
        e.preventDefault()
        loginUserFn(details);
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="d-flex flex-column justify-content-center align-items-center col-12 bg-dark text-light" style={{ width: "100vw", height: "100vh" }}>
                    <h1 className="text-light">Welcome to Login Page</h1>
                    <div className="form-row d-flex flex-column justify-content-center align-items-center container-fluid col-12">
                        <div className="form-group col-md-6 m-1">
                            <label for="inputEmail4">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder="Email" onChange={(e) => setDetails({ ...details, username: e.target.value })}></input>
                        </div>
                        <div className="form-group col-md-6 m-1">
                            <label for="inputPassword4">Password</label>
                            <input type="password" className="form-control" id="inputPassword4" placeholder="Password" onChange={(e) => setDetails({ ...details, password: e.target.value })}></input>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary m-4 col-md-6" onClick={handleSubmit}>Sign in</button>
                </div>
            </form>
        </>
    )
}

export default Login;
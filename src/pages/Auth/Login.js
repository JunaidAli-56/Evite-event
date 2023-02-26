import React, { useState } from "react";
import { auth } from "config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { Button, PasswordInput } from "@mantine/core";

const initialState = {
    email: '',
    password: '',
}
function Login() {

    const [state, setState] = useState(initialState);
    const [isProcessing, setIsProcessing] = useState(false)
    const navigate = useNavigate();

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setState(s => ({ ...s, [name]: value }))
        console.log(s => ({ ...s, [name]: value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        let { email, password } = state;
        console.log(email, password)

        setIsProcessing(true)

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                window.toastify("Login Successfully", "success")
                navigate('/')
                console.log(user)
                // ...
            }).catch((err) => {
                window.toastify("email and password is not correct", "error")
                // console.log(err)
            }).then(() => {
                setIsProcessing(false)
            })
    }
    // console.log(state)
    return (
        <>
            <div className="container-fluid bg-primary register-con">
                <div className="row">
                    <div className="col">
                        <div className="card p-4" >
                            <h2 className="text-center mb-4">
                                Login
                            </h2>
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col mb-3">
                                        <input type="email" className="form-control"
                                            placeholder="Enter email..." name="email"
                                            onChange={changeHandler} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col mb-3">
                                        {/* <input type="password" className="form-control"
                                            placeholder="Enter Password..."
                                            name="password" onChange={changeHandler} /> */}
                                        <PasswordInput
                                            placeholder="Enter Password..."
                                            name="password" onChange={changeHandler}
                                        />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <button className="btn btn-primary w-25" disabled={isProcessing}>
                                        {!isProcessing
                                            ? <span>Login</span>
                                            : <div className="spinner spinner-grow spinner-grow-sm"></div>}
                                    </button>
                                    <Link to="/auth/register" className="pt-2">
                                        Register Now
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;

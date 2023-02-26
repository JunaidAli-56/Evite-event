import React, { useState } from "react";
import { auth } from "config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { PasswordInput } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const initialState = {
    fname: '',
    email: '',
    password: '',
    confirmPassword: '',
}
function Register() {

    const [state, setState] = useState(initialState);
    const [isProcessing, setIsProcessing] = useState(false);
    const navigate = useNavigate();

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setState(s => ({ ...s, [name]: value }))
        // console.log(s => ({ ...s, [name]: value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        let { fname, email, password, confirmPassword } = state;

        if (confirmPassword !== password) {
            return window.toastify("password does not match", 'error')
        }
        console.log(fname, email, password)

        setIsProcessing(true)

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                window.toastify("user created successfully", "success");
                navigate('/auth/login')
                console.log(user)
                // ...
            })
            .catch((err) => {
                window.toastify("something went wrong with email and password", "error")
                // console.log(err)
            })
            .then(() => {
                setIsProcessing(false)
            })
    }
    // console.log(state)
    return (
        <>
            <div className="container-fluid bg-primary register-con">
                <div className="row">
                    <div className="col">
                        <div className="card p-3" >
                            <h2 className="text-center mb-4">
                                Register
                            </h2>
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col mb-3">
                                        <input type="text" className="form-control"
                                            placeholder="Enter first name..."
                                            name="fname" onChange={changeHandler} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col mb-3">
                                        <input type="email" className="form-control"
                                            placeholder="Enter email..." name="email"
                                            onChange={changeHandler} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col mb-3">
                                        <PasswordInput
                                            placeholder="Enter Password..."
                                            name="password" onChange={changeHandler}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col mb-3">
                                        <PasswordInput
                                            placeholder="Confirm Password..."
                                            name="confirmPassword" onChange={changeHandler} />
                                    </div>
                                </div>
                                <button className="btn btn-primary w-100" disabled={isProcessing}>
                                    {!isProcessing
                                        ? <span>Submit</span>
                                        : <div className="spinner spinner-grow spinner-grow-sm"></div>}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;

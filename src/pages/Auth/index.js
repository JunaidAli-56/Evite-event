import React from "react";
import { Routes, Route } from "react-router-dom"
import Login from "./Login"
import Register from "./Register";
import ForgotPassword from "./ForgotPassword"
import ResetPassword from "./ResetPassword"

function Index() {
    return (
        <main>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgotpassword" element={<ForgotPassword />} />
                <Route path="/resetpassword" element={<ResetPassword />} />
            </Routes>
        </main>
    );
}

export default Index;

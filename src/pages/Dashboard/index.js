import React from "react";
import { Route, Routes } from "react-router-dom";
import DasHome from "./DasHome";

function Index() {
    return (
        <Routes>
            <Route path="/" element={<DasHome />} />
            <Route path="*" element={<>No Page Found</>} />
        </Routes>
    )
}

export default Index;

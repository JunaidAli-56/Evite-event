import React from "react";
import { Routes, Route } from "react-router-dom"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Home from "./Home"
import Events from "./Event"
import About from "./About"
import { Storage } from "./Storage";
import Navbar from "components/Navbar/Navbar";
import AddEvent from "./AddEvent";
import JoinEvent from "./JoinEvent";

function Index() {
    return (
        <>
            {/* <Header /> */}
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/event" element={<Events />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/addevent" element={<AddEvent />} />
                    <Route path="/storage" element={<Storage />} />
                    <Route path="/joinevent" element={<JoinEvent />} />
                    <Route path="*" element={<>No Page Found</>} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}

export default Index;

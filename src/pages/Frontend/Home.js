import { auth } from "config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import HeroSec from '../../components/HeroSec/HeroSec'

function Home() {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
            } else {
                console.log("User is signed out");
            }
            setIsLoading(false)
        });
        console.log("Working");

    }, [])
    return (
        <div className="container-fluid m-0 p-0">
            <div className="row m-0 p-0">
                <div className="col-12 m-0 p-0">
                    <HeroSec />
                </div>

                <div className="row py-5 text-center text-primary">
                    <h1>EVENTS CAN OFFER</h1>
                    <p>About Events is your partner! An extension of your team, rowing in the same direction with the same goal.</p>
                </div>

            </div>
        </div >
    )
}

export default Home;

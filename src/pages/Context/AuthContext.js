import React, { useReducer, createContext, useEffect, useContext } from 'react'
import { auth } from '../../config/firebase'
import { onAuthStateChanged } from 'firebase/auth'

export const AuthContext = createContext()

const initialState = { isAuthenticated: false }

const reducer = ((state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { isAuthenticated: true };
        case "LOGOUT":
            return { isAuthenticated: false };
        default:
            return state;
    }

})

export function AuthContextProvider(props) {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                console.log(user)
                console.log("User is signed in")
                dispatch({ type: "LOGIN" })
            } else {
                console.log("User is signed out")
            }
        });
    }, [])


    return (
        <AuthContext.Provider value={{ authentication: state, dispatch }}>
            {props.children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => {
    return useContext(AuthContext)
}
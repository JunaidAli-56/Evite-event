import React, { useReducer, createContext, useEffect, useContext, useState } from 'react'
import { auth, firestore } from '../../config/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { collection, getDocs } from 'firebase/firestore'

export const AuthContext = createContext()
export const UserDataContext = createContext()

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


export function UserDataContextProvider(props) {
    const [document, setDocument] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // let name = "Junaid";
    const readDocuments = async () => {
        setIsLoading(true);
        const querySnapshot = await getDocs(collection(firestore, "events"));

        const array = [];
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            let data = doc.data();
            array.push(data);
            setIsLoading(false);
        });
        setDocument(array)
    }
    useEffect(() => {
        readDocuments();
    }, []);
    return (
        <UserDataContext.Provider value={document}>
            {props.children}
        </UserDataContext.Provider>
    )

}
// export const useData = () => {
//     return useContext(UserDataContext)
// }


import { firestore } from "config/firebase";
import { collection, deleteDoc, doc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './dashome.scss'
function DasHome() {
    const [document, setDocument] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

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

    const handleUpdate = async (events) => {
        try {
            await updateDoc(doc(firestore, "messages", events.id), { fullName: "Jarviz" });
            window.toastify("Document update successfully", "success");
        } catch (e) {
            window.toastify("Document is not updated", "error")
        }
    }
    const handleDelete = async (events) => {
        try {
            await deleteDoc(doc(firestore, "messages", events.id), { fullName: "Jarviz" });
            window.toastify("Document deleted successfully", "success");
        } catch (e) {
            window.toastify("Document is not delete", "error")
        }
    }

    return (
        <>

            <div className="container py-1">
                <div className="row">
                    <div className="col">
                        <Link to='/'>
                            <button className="btn btn-primary mt-3">Back to home</button>
                        </Link>
                    </div>
                </div>
            </div>
            <h1 className="text-center text-primary heading">EVENTS</h1>
            <div className="container-fluid px-5 py-3 table-of-data">
                <div className="row">
                    <div className="col-12">
                        <div className="container-fluid table-con">
                            <div className="row">
                                <div className="col table-col">
                                    <ul className="me-3 m-0 py-2 px-3">
                                        <li><h5>No.</h5> </li>
                                        <li><h5>ID</h5> </li>
                                        <li><h5>Name</h5> </li>
                                        <li><h5>Email</h5> </li>
                                    </ul>
                                    <div className="action-div">
                                        <h5>Actions</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container-fluid getData-con px-4 text-center">
                            <div className="row">
                                <div className="col getData-col">
                                    {document.map((doc, i) => {
                                        return (
                                            <div className="card getData-card mt-3 border-0"
                                                key={i}>
                                                <div className="p-2">
                                                    <ul className=" m-0  px-3">
                                                        <li>{i + 1}</li>
                                                        <li>{doc.id}</li>
                                                        <li>{doc.fullName}</li>
                                                        <li>{doc.email}</li>
                                                        <li>{doc.message}</li>
                                                    </ul>
                                                    <div className="btn-div">
                                                        <button className="btn btn-primary me-2"
                                                            onClick={() => { handleUpdate(doc) }}
                                                        >Update</button>
                                                        <button className="btn btn-danger"
                                                            onClick={() => { handleDelete(doc) }}
                                                        >Delete</button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default DasHome;



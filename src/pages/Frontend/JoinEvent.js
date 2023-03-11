import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { firestore, storage } from "config/firebase";
import { collection, doc, getDocs, serverTimestamp, setDoc, updateDoc, } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import './addevent.scss'
import { CollectionsBookmark } from "@mui/icons-material";
const initialState = {
    fullName: "",
    email: '',
    dob: "",
    date: "",
    address: "",
    message: "",
}
function JoinEvent() {

    const [state, setState] = useState(initialState);
    const [isProcessing, setIsProcessing] = useState(false);
    const [file, setFile] = useState({});
    const [imgUrl, setImgUrl] = useState({})


    const changeHandler = (e) => {
        const { name, value } = e.target;
        setState(s => ({ ...s, [name]: value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        let { fullName, email, dob, date, address, message } = state;

        fullName = fullName.trim();
        address = address.trim();
        message = message.trim();


        if (fullName.length < 3) {
            return window.toastify('Enter full name correctly', 'error');
        }
        if (window.isEmail(email)) {
            return window.toastify('Enter email correctly', 'error');
        }
        if (address.length < 3) {
            return window.toastify('Enter your Address correctly', 'error');
        }
        if (message.length < 3) {
            return window.toastify('Enter your message correctly', 'error');
        }
        // console.log(email, password)

        let formData = {
            fullName, email, dob, date, address, message,
            id: window.getRandomId,
            serverTimestamp: serverTimestamp(),
        }
        setIsProcessing(true);


        if (file.name) {
            window.toastify("Image is Uploading", "info");
            uploadFile(formData);
        } else {
            createDocument(formData)
        }
    }
    const uploadFile = (formData) => {
        console.log('Uploading');

        const fileName = file.name;
        const storageRef = ref(storage, `images/${fileName}`);

        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed',
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                // window.toastify('Upload is ' + progress + '% done', "success");
            },
            (error) => {
                window.toastify("something went wrong in uploading image ", "error");
                // Handle unsuccessful uploads
                setIsProcessing(false);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL)
                    setImgUrl(downloadURL);
                    const data = { ...formData, photos: { name: fileName, url: downloadURL, } }
                    createDocument(data);
                });
            }
        );
    }
    const createDocument = async (formData) => {
        console.log("doc is created");
        try {
            await setDoc(doc(firestore, "events", formData.id), formData);
            window.toastify("Join Event successfully", "success");
            setState(initialState);
        } catch (e) {
            window.toastify("Error joining Event", "error")
        }
        setIsProcessing(false);

    }

    return (
        <>
            <div className="container-fluid contact-con p-5">
                <div className="row">
                    <div className="col mx-auto" style={{ maxWidth: "740px" }}>
                        <div className="card p-4 event-card">
                            <h2 className="text-center mb-5 py-2">
                                Join Events
                            </h2>
                            <form onSubmit={handleSubmit}>
                                <div className="row event-row px-5">
                                    <div className="col-12 mb-3">
                                        <input type="text" className="form-control"
                                            placeholder="Full Name" name="fullName"
                                            value={state.fullName}
                                            onChange={changeHandler} />
                                    </div>
                                    <div className="col-lg-6  col-md-12 mb-3">
                                        <input type="email" className="form-control"
                                            placeholder="Enter email..." name="email"
                                            value={state.email}
                                            onChange={changeHandler} />
                                    </div>

                                    <div className="col-lg-6 col-md-12 mb-3">
                                        <input type="text" className="form-control"
                                            placeholder="Date of Birth" name="dob"
                                            value={state.dob}
                                            onChange={changeHandler} />
                                    </div>
                                    <div className="col-6 mb-3">
                                        <input type="date" className="form-control"
                                            placeholder="Event Date" name="date"
                                            value={state.date}
                                            onChange={changeHandler} />
                                    </div>
                                    <div className="col-6 mb-3">
                                        <input type="file" className="form-control"
                                            name="img"
                                            onChange={(e) => { setFile(e.target.files[0]) }}
                                        />
                                    </div>
                                    <div className="col-12 mb-3">
                                        <input type="text" className="form-control"
                                            placeholder="Address" name="address"
                                            value={state.address}
                                            onChange={changeHandler} />
                                    </div>
                                    <div className="col mb-3">
                                        <textarea className="form-control"
                                            name="message" onChange={changeHandler}
                                            value={state.message}
                                            placeholder="Title...">

                                        </textarea>
                                    </div>
                                </div>
                                <div className="col-12 px-5 d-flex justify-content-end">
                                    <Link to='/'>
                                        <button className="deletebtn me-4" disabled={isProcessing}>
                                            Cancel
                                        </button></Link>
                                    <button className="mybtn" disabled={isProcessing}>
                                        {!isProcessing ?
                                            <span>Join</span>
                                            :
                                            <span className="spinner spinner-grow"></span>
                                        }
                                    </button>


                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default JoinEvent;

import React, { useState } from "react";
import { firestore, storage } from "config/firebase";
import { doc, serverTimestamp, setDoc, } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { createStyles } from "@mantine/core";
import './addevent.scss'
import { Link } from "react-router-dom";
const initialState = {
    fullName: "",
    email: '',
    city: "",
    date: "",
    subject: "",
    message: "",
}
function AddEvent() {

    const [state, setState] = useState(initialState);
    const [isProcessing, setIsProcessing] = useState(false);
    const [file, setFile] = useState({});

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setState(s => ({ ...s, [name]: value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        let { fullName, email, city, date, subject, message } = state;

        fullName = fullName.trim();
        subject = subject.trim();
        message = message.trim();


        if (fullName.length < 3) {
            return window.toastify('Enter full name correctly', 'error');
        }
        if (window.isEmail(email)) {
            return window.toastify('Enter email correctly', 'error');
        }
        if (subject.length < 3) {
            return window.toastify('Enter your subject correctly', 'error');
        }
        if (message.length < 3) {
            return window.toastify('Enter your message correctly', 'error');
        }
        // console.log(email, password)

        let formData = {
            fullName, email, city, date, subject, message,
            id: window.getRandomId,
            serverTimestamp: serverTimestamp(),
        }
        setIsProcessing(true);

        if (file.name) {
            window.toastify("Event is Uploading", "success")
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

        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
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
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
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
            window.toastify("Event added successfully", "success");
            setState(initialState);
        } catch (e) {
            window.toastify("Error Adding Event", "error")
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
                                Add Events
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
                                            placeholder="City" name="city"
                                            value={state.city}
                                            onChange={changeHandler} />
                                    </div>
                                    <div className="col-12 mb-3">
                                        <input type="date" className="form-control"
                                            placeholder="Event Date" name="date"
                                            value={state.date}
                                            onChange={changeHandler} />
                                        {/* <DatePicker
                                            label="Event date"
                                            placeholder="Enter Date here"
                                            classNames={classes}
                                            clearable={true}
                                            name="date"
                                            value={state.date}
                                            onChange={changeHandler}

                                        /> */}
                                    </div>
                                    <div className="col-12 mb-3">
                                        <input type="text" className="form-control"
                                            placeholder="Subject" name="subject"
                                            value={state.subject}
                                            onChange={changeHandler} />
                                    </div>
                                    <div className="col-12 mb-3">
                                        <input type="file" className="form-control"
                                            onChange={(e) => { setFile(e.target.files[0]) }} />
                                    </div>
                                    <div className="col mb-3">
                                        <textarea className="form-control"
                                            name="message" onChange={changeHandler}
                                            value={state.message}
                                            placeholder="Entere here...">

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
                                            <span>Submit</span>
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

export default AddEvent;

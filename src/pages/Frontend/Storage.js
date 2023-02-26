import { firestore, storage } from "config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useState } from "react";

const initialState = {
    name: "",
    desc: "",
}
export const Storage = (props) => {
    const [state, setState] = useState(initialState)
    const [loading, setLoading] = useState(false)
    const [file, setFile] = useState({});
    const [imgUrl, setImgUrl] = useState();


    const handleChange = (e) => {
        setState(s => ({ ...s, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            name: state.name,
            desc: state.desc,
            id: window.getRandomId,

        }
        setLoading(true)

        if (file.name) {
            createFile(formData);
        } else {

            createDoc(formData);
        }

        setLoading(false)
    }
    const createFile = (formData) => {
        let fileName = formData.id + "-" + file.name;
        const storageRef = ref(storage, 'images/' + fileName)
        const uploadTask = uploadBytesResumable(storageRef, file);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on('state_changed',
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');

            },
            (error) => {
                window.toastify("file is not uploaded", "error")
            },
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    setImgUrl(downloadURL);
                    const data = {
                        ...formData,
                        photo: {
                            name: file.name,
                            url: downloadURL,
                        }
                    }
                    createDoc(data)
                });
            }
        );
    }
    const createDoc = async (formData) => {
        try {
            await addDoc(collection(firestore, "usersData"), formData);
            window.toastify('Cakeeee!!!', 'success')
        } catch (e) {
            window.toastify('Fu*k😡!', 'error')
        }
    }


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                        <input type="text" className="form-control" name="name" value={state.name} onChange={handleChange} id="exampleFormControlInput1" placeholder="Cake" />

                    </div>
                    <div className="col-12 mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Desc</label>
                        <input type="text" className="form-control" name="desc" value={state.desc} onChange={handleChange} id="exampleFormControlInput1" placeholder="Desc" />
                    </div>
                    <div className="col-6 mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">image</label>
                        <input type="file" className="form-control" id="exampleFormControlInput1" placeholder="Image"
                            onChange={(e) => {
                                setFile(e.target.files[0])
                            }}
                        />
                    </div>
                    <div className="col-6 mb-3 rounded">
                        {
                            imgUrl ? <img src={imgUrl} className="img-fluid" alt="" /> :
                                <div>Lali is the best baked cake in this entire wolrd</div>
                        }
                    </div>
                    <div className="col-12 mb-3">
                        {
                            !loading ? <button className="btn btn-primary" onClick={handleSubmit}>Add Data</button>
                                :
                                <button className="spinner spinner-grow"></button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

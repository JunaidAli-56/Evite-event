import React, { useContext } from 'react';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { firestore } from 'config/firebase';
import './event.scss'
import { UserDataContext } from '../Context/AuthContext'
import { Link } from 'react-router-dom';
import { Key } from '@mui/icons-material';

export default function Event() {

    const document = useContext(UserDataContext);

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

    function swapImage(pro) {
        var element = document.getElementById("myImage");

        if (element.src === `${document.photos?.url}`) {
            <img src={doc.photos?.url} className='img-fluid' alt={doc.fullName} height="40" width="100" />
        } else {
            <div className='bg-primary' height="40" width="100">
                <p className='text-center'>User</p>
            </div>
        }
    }

    return (
        <>
            {/* <div className="container-fluid py-3">
            <div className="row">
                <div className="col-6">
                    <Card withBorder radius="md" className='m-0 p-0'>
                        <div className="card border-0">
                            <div className="row g-0 px-3">
                                <div className='d-flex justify-content-between pt-3'>
                                    <div className='img-logo me-2'>
                                        <Link className="navbar-brand" to="/">
                                            <img src="https://static1.squarespace.com/static/58c9e16237c5813452abfd18/t/5ad632391ae6cf3660bdf4d0/1523987004984/pink.png" alt="Bootstrap" width="40" height="40" />
                                        </Link>
                                    </div>
                                    <Badge className='mt-2'>12 days left</Badge>
                                </div>
                                <div className="col-md-6">
                                    <div className='d-flex justify-cotent-center align-items-center h-100 w-100'>
                                        <img src="https://lh3.googleusercontent.com/p/AF1QipMDw4eDi8GyQeXlMn69Lof3vgIbKH4LA_Cocd7Y=s1360-w1360-h1020" alt="Bootstrap" className="img-fluid rounded" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <Text size="lg" weight={500} mt="md">
                                            <span className='text-primary'>Messe Berlin</span> &nbsp;
                                            <small>(Sep 2022)</small>
                                        </Text>
                                        <Text size="sm" color="dimmed" mt={5}>
                                            Messe Berlin are exhibition grounds in the Charlottenburg-Wilmersdorf precinct of Berlin, Germany, at Masurenallee opposite the Haus des Rundfunks
                                        </Text>
                                        <Text color="dimmed" size="sm" mt="md">
                                            Tasks completed:{' '}
                                            <Text
                                                span
                                                weight={500}
                                                sx={(theme) => ({ color: theme.colorScheme === 'dark' ? theme.white : theme.black })}
                                            >
                                                23/36
                                            </Text>
                                        </Text>

                                        <Progress value={(23 / 36) * 100} mt={5} />
                                    </div>
                                </div>
                                <Group position="apart" mt="md" className='pb-3'>
                                    <Avatar.Group spacing="sm">
                                        <Avatar src={avatars[0]} radius="xl" />
                                        <Avatar src={avatars[1]} radius="xl" />
                                        <Avatar src={avatars[2]} radius="xl" />
                                        <Avatar radius="xl">+5</Avatar>
                                    </Avatar.Group>
                                    <ActionIcon variant="default">
                                        <IconUpload size={18} />
                                    </ActionIcon>
                                </Group>
                            </div>
                        </div>
                    </Card>

                </div>
                <div className="col-6">
                    <Card withBorder radius="md" className='m-0 p-0'>
                        <div className="card border-0">
                            <div className="row g-0 px-3">
                                <div className='d-flex justify-content-between pt-3'>
                                    <div className='img-logo me-2'>
                                        <Link className="navbar-brand" to="/">
                                            <img src="https://static1.squarespace.com/static/58c9e16237c5813452abfd18/t/5ad632391ae6cf3660bdf4d0/1523987004984/pink.png" alt="Bootstrap" width="40" height="40" />
                                        </Link>
                                    </div>
                                    <Badge className='mt-2'>2 months left</Badge>
                                </div>
                                <div className="col-md-6">
                                    <div className='d-flex justify-cotent-center align-items-center h-100 w-100'>
                                        <img src="https://antiguantrumpet.com/wp-content/uploads/2022/09/842F8BC0-205D-4F46-A895-F79AE9965E6B.jpeg  " alt="Bootstrap" className="img-fluid rounded" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <Text size="lg" weight={500} mt="md">
                                            <span className='text-primary'>Skift Global</span> &nbsp;
                                            <small>(Mar 2023)</small>
                                        </Text>
                                        <Text size="sm" color="dimmed" mt={5}>
                                            Skift Global Forum 2022 — the flagship global conference on the business of travel — is returning this September as a full scale in-person event in New York City and broadcast online globally.
                                        </Text>
                                        <Text color="dimmed" size="sm" mt="md">
                                            Tasks completed:{' '}
                                            <Text
                                                span
                                                weight={500}
                                                sx={(theme) => ({ color: theme.colorScheme === 'dark' ? theme.white : theme.black })}
                                            >
                                                23/36
                                            </Text>
                                        </Text>

                                        <Progress value={(23 / 36) * 100} mt={5} />
                                    </div>
                                </div>
                                <Group position="apart" mt="md" className='pb-3'>
                                    <Avatar.Group spacing="sm">
                                        <Avatar src={avatars[0]} radius="xl" />
                                        <Avatar src={avatars[1]} radius="xl" />
                                        <Avatar src={avatars[2]} radius="xl" />
                                        <Avatar radius="xl">+5</Avatar>
                                    </Avatar.Group>
                                    <ActionIcon variant="default">
                                        <IconUpload size={18} />
                                    </ActionIcon>
                                </Group>
                            </div>
                        </div>
                    </Card>

                </div>
            </div>
            <div className="row py-4">
                <div className="col-6">
                    <Card withBorder radius="md" className='m-0 p-0'>
                        <div className="card border-0">
                            <div className="row g-0 px-3">
                                <div className='d-flex justify-content-between pt-3'>
                                    <div className='img-logo me-2'>
                                        <Link className="navbar-brand" to="/">
                                            <img src="https://static1.squarespace.com/static/58c9e16237c5813452abfd18/t/5ad632391ae6cf3660bdf4d0/1523987004984/pink.png" alt="Bootstrap" width="40" height="40" />
                                        </Link>
                                    </div>
                                    <Badge className='mt-2'>12 days left</Badge>
                                </div>
                                <div className="col-md-6">
                                    <div className='d-flex justify-cotent-center align-items-center h-100 w-100'>
                                        <img src="https://lh3.googleusercontent.com/p/AF1QipMDw4eDi8GyQeXlMn69Lof3vgIbKH4LA_Cocd7Y=s1360-w1360-h1020" alt="Bootstrap" className="img-fluid rounded" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <Text size="lg" weight={500} mt="md">
                                            <span className='text-primary'>Messe Berlin</span> &nbsp;
                                            <small>(Sep 2022)</small>
                                        </Text>
                                        <Text size="sm" color="dimmed" mt={5}>
                                            Messe Berlin are exhibition grounds in the Charlottenburg-Wilmersdorf precinct of Berlin, Germany, at Masurenallee opposite the Haus des Rundfunks
                                        </Text>
                                        <Text color="dimmed" size="sm" mt="md">
                                            Tasks completed:{' '}
                                            <Text
                                                span
                                                weight={500}
                                                sx={(theme) => ({ color: theme.colorScheme === 'dark' ? theme.white : theme.black })}
                                            >
                                                23/36
                                            </Text>
                                        </Text>

                                        <Progress value={(23 / 36) * 100} mt={5} />
                                    </div>
                                </div>
                                <Group position="apart" mt="md" className='pb-3'>
                                    <Avatar.Group spacing="sm">
                                        <Avatar src={avatars[0]} radius="xl" />
                                        <Avatar src={avatars[1]} radius="xl" />
                                        <Avatar src={avatars[2]} radius="xl" />
                                        <Avatar radius="xl">+5</Avatar>
                                    </Avatar.Group>
                                    <ActionIcon variant="default">
                                        <IconUpload size={18} />
                                    </ActionIcon>
                                </Group>
                            </div>
                        </div>
                    </Card>

                </div>
                <div className="col-6">
                    <Card withBorder radius="md" className='m-0 p-0'>
                        <div className="card border-0">
                            <div className="row g-0 px-3">
                                <div className='d-flex justify-content-between pt-3'>
                                    <div className='img-logo me-2'>
                                        <Link className="navbar-brand" to="/">
                                            <img src="https://static1.squarespace.com/static/58c9e16237c5813452abfd18/t/5ad632391ae6cf3660bdf4d0/1523987004984/pink.png" alt="Bootstrap" width="40" height="40" />
                                        </Link>
                                    </div>
                                    <Badge className='mt-2'>2 months left</Badge>
                                </div>
                                <div className="col-md-6">
                                    <div className='d-flex justify-cotent-center align-items-center h-100 w-100'>
                                        <img src="https://www.revistahotelnews.com.br/wp-content/uploads/2020/07/skift-global-forum-hotelnews.jpg" alt="Bootstrap" className="img-fluid rounded" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <Text size="lg" weight={500} mt="md">
                                            <span className='text-primary'>Skift Global</span> &nbsp;
                                            <small>(Mar 2023)</small>
                                        </Text>
                                        <Text size="sm" color="dimmed" mt={5}>
                                            Messe Berlin are exhibition grounds in the Charlottenburg-Wilmersdorf precinct of Berlin, Germany, at Masurenallee opposite the Haus des Rundfunks
                                        </Text>
                                        <Text color="dimmed" size="sm" mt="md">
                                            Tasks completed:{' '}
                                            <Text
                                                span
                                                weight={500}
                                                sx={(theme) => ({ color: theme.colorScheme === 'dark' ? theme.white : theme.black })}
                                            >
                                                23/36
                                            </Text>
                                        </Text>

                                        <Progress value={(23 / 36) * 100} mt={5} />
                                    </div>
                                </div>
                                <Group position="apart" mt="md" className='pb-3'>
                                    <Avatar.Group spacing="sm">
                                        <Avatar src={avatars[0]} radius="xl" />
                                        <Avatar src={avatars[1]} radius="xl" />
                                        <Avatar src={avatars[2]} radius="xl" />
                                        <Avatar radius="xl">+5</Avatar>
                                    </Avatar.Group>
                                    <ActionIcon variant="default">
                                        <IconUpload size={18} />
                                    </ActionIcon>
                                </Group>
                            </div>
                        </div>
                    </Card>

                </div>
            </div>
        </div > */}
            <div div className="container-fluid p-5 event-card-con" >
                <div className="row">
                    {/* <img src={imgUrl} alt="" /> */}
                    {document.map((doc, i) => {
                        return (

                            <div className="col-lg-3 col-md-6 col-sm-12 event-card-col"
                                key={i + 1}>
                                <div className="card mycard">
                                    <div className='top-info'>
                                        <span>{doc.date}</span>
                                    </div>
                                    <div className='mycard-inner'>
                                        <img src={doc.photos?.url} className="card-img-top" alt={doc.fullName} />
                                    </div>
                                    <div className="card-body mycard-body">
                                        <h5 className="card-title mycard-title">{doc.title}</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <Link to="/joinevent" className="btn btn-primary w-100">Join now</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div >

        </>
    );
}
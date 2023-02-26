import { Card, Avatar, Text, Progress, Badge, Group, ActionIcon } from '@mantine/core';
import { MantineLogo } from '@mantine/ds';
import { IconUpload } from '@tabler/icons';
import { Link } from 'react-router-dom';
import './event.scss'

const avatars = [
    'https://avatars.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4',
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80',
    'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80',
];



export default function Event() {
    return (
        <>
            <div className="container-fluid py-3">
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
            </div >

        </>
    );
}
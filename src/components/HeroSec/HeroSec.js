// import React from "react";
// const HeroSec = () => {
//     return (
//         <>
//             <div className="container">
//                 <div className="row">
//                     <div className="col-6 about-col">
//                         <h1>Bring in-person events alive with Klik Experiential</h1>
//                         <p>Attendee expectations for in-person events are higher than ever. Onsite check-in should be painless, and exhibitor interactions should be seamless. Luckily, Bizzabo is changing the game.</p>
//                         <button className="btn btn-primary">Learn More</button>
//                     </div>
//                     <div className="col-6 img-col">
//                         <img className="img-fluid" data-src="https://cdn-gonnn.nitrocdn.com/pAPFbgJhpCHMACjohIfdYAJjIpZWqRqt/assets/images/optimized/rev-c6aa003/wp-content/uploads/2023/02/ezgif.com-gif-maker-1-1.webp" alt="" nitro-lazy-src="https://cdn-gonnn.nitrocdn.com/pAPFbgJhpCHMACjohIfdYAJjIpZWqRqt/assets/images/optimized/rev-c6aa003/wp-content/uploads/2023/02/ezgif.com-gif-maker-1-1.webp" class="attachment-large size-large wp-image-29463 lazyload lazyloaded" decoding="async" nitro-lazy-empty="" id="MzQ2OTozMDc=-1" src="https://cdn-gonnn.nitrocdn.com/pAPFbgJhpCHMACjohIfdYAJjIpZWqRqt/assets/images/optimized/rev-c6aa003/wp-content/uploads/2023/02/ezgif.com-gif-maker-1-1.webp" />
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// };

// export default HeroSec;




import { Title, Text, Container, Button, Overlay, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    wrapper: {
        position: 'relative',
        paddingTop: 180,
        paddingBottom: 130,
        backgroundImage:
            'url(https://images.squarespace-cdn.com/content/v1/5b46112596d4557cbd0f2fba/1540861156936-NTWC8JIE8EQ7NBBNQUB7/image-asset.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',

        '@media (max-width: 520px)': {
            paddingTop: 80,
            paddingBottom: 50,
        },
    },

    inner: {
        position: 'relative',
        zIndex: 1,
    },

    title: {
        fontWeight: 800,
        fontSize: 40,
        letterSpacing: -1,
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        color: theme.white,
        marginBottom: theme.spacing.xs,
        textAlign: 'center',
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,

        '@media (max-width: 520px)': {
            fontSize: 28,
            textAlign: 'left',
        },
    },

    highlight: {
        color: theme.colors[theme.primaryColor][4],
    },

    description: {
        color: theme.colors.gray[0],
        textAlign: 'center',

        '@media (max-width: 520px)': {
            fontSize: theme.fontSizes.md,
            textAlign: 'left',
        },
    },

    controls: {
        marginTop: theme.spacing.xl * 1.5,
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,

        '@media (max-width: 520px)': {
            flexDirection: 'column',
        },
    },

    control: {
        height: 42,
        fontSize: theme.fontSizes.md,

        '&:not(:first-of-type)': {
            marginLeft: theme.spacing.md,
        },

        '@media (max-width: 520px)': {
            '&:not(:first-of-type)': {
                marginTop: theme.spacing.md,
                marginLeft: 0,
            },
        },
    },

    secondaryControl: {
        color: theme.white,
        backgroundColor: 'rgba(255, 255, 255, .4)',

        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, .45) !important',
        },
    },
}));

export default function HeroSec() {
    const { classes, cx } = useStyles();

    return (
        <div className={classes.wrapper}>
            <Overlay color="#000" opacity={0.65} zIndex={1} />

            <div className={classes.inner}>
                <Title className={classes.title}>
                    Explore more{' '}
                    <Text component="span" inherit className={classes.highlight}>
                        Events
                    </Text>
                </Title>

                <Container size={640}>
                    <Text size="lg" className={classes.description}>
                        An event is a planned and organized occasion, for example a social gathering or a sports match. The cross-country section of the three-day event was held here yesterday.
                    </Text>
                </Container>

                <div className={classes.controls}>
                    <Button className={classes.control} variant="blue" size="lg">
                        Get started
                    </Button>
                    <Button className={cx(classes.control, classes.secondaryControl)} size="lg">
                        Live demo
                    </Button>
                </div>
            </div>
        </div>
    );
}
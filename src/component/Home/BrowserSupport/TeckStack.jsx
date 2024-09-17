import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

const data = [
    {
        title: 'React / React Native',
        subtitle:
            '',
        icon: '/reactjs-svgrepo-com.svg',
    },
    {
        title: 'SpringBoot',
        subtitle:
            '',
        icon: '/Spring_Boot.svg.png',
    },
    {
        title: 'NextJS',
        subtitle:
            '',
        icon: '/nextjs-svgrepo-com.svg',
    },{
        title: 'NodeJs',
        subtitle:
            '',
        icon: '/nodejs-logo.svg',
    },{
        title: 'VueJS',
        subtitle:
            '',
        icon: '/vuejs-svgrepo-com.svg',
    },{
        title: 'Rails',
        subtitle:
            '',
        icon: '/rails-svgrepo-com.svg',
    },
    {
        title: 'Django',
        subtitle:
            '',
        icon: '/django-svgrepo-com.svg',
    },
    {
        title: '.NET',
        subtitle:
            '',
        icon: '/dotnet-svgrepo-com.svg',
    },
];

const TechStack = () => {
    return (
        <Box p={2} mb={2}>
            <Box marginBottom={4} textAlign={'center'}>

                <Typography fontWeight={700} variant={'h4'}>
                    Some of the tech stack we support
                </Typography>
            </Box>
            <Grid container spacing={2}>
                {data.map((item, i) => (
                    <Grid item xs={12} md={3} key={i}>
                        <Box
                            width={1}
                            height={1}
                            data-aos={'fade-up'}
                            data-aos-delay={i * 100}
                            data-aos-offset={100}
                            data-aos-duration={600}
                        >
                            <Box
                                display={'flex'}
                                flexDirection={'column'}
                                alignItems={'center'}
                            >
                                <Box
                                    component={Avatar}
                                    width={80}
                                    height={80}
                                    marginBottom={2}
                                    src={item.icon}
                                />
                                <Typography
                                    variant={'h6'}
                                    gutterBottom
                                    fontWeight={500}
                                    align={'center'}
                                >
                                    {item.title}
                                </Typography>
                                <Typography align={'center'} color="text.secondary">
                                    {item.subtitle}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default TechStack

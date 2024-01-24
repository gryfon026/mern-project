import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import { getPosts } from './actions/posts';
import projects from './images/projects-background.jpg';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

import useStyles from './styles';
import { useDispatch } from 'react-redux';

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <Container maxWidth="lg">
            <AppBar
                className={classes.appBar}
                position="static"
                color="inherit"
            >
                <Typography variant="h2" align="center">
                    Projects
                </Typography>
                <img
                    className={classes.image}
                    src={projects}
                    alt="Web Projects"
                    height="60"
                />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid
                        container
                        justifyContent="space-between"
                        alignItems="stretch"
                        spacing={3}
                    >
                        <Grid item xs={12} sm={6}>
                            <Posts></Posts>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Form></Form>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
};
export default App;

import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post.js';
import useStyles from './styles';

const Posts = () => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    console.log(posts);

    return (
        <>
            {!posts.length ? (
                <CircularProgress />
            ) : (
                <Grid className={classes.mainContainer} container>
                    {posts.map((post, index) => (
                        <Post key={index} post={post} />
                    ))}
                </Grid>
            )}
        </>
    );
};

export default Posts;

import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts';
import useStyles from './styles';

const initialPostData = {
    title: '',
    description: '',
    creator: '',
    url: '',
    tags: [],
    image: '',
};

const Form = () => {
    const dispatch = useDispatch();
    const [postData, setPostData] = useState(initialPostData);
    const classes = useStyles();

    const clearPostData = () => setPostData(initialPostData);
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(createPost(postData));
        setTimeout(clearPostData, 1000);
        console.log('submit', postData);
    };

    const handleChangeTags = (event) =>
        setPostData((prevPostData) => ({
            ...prevPostData,
            [event.target.name]: [event.target.value],
        }));

    const handleChange = (event) =>
        setPostData((prevPostData) => ({
            ...prevPostData,
            [event.target.name]: event.target.value,
        }));

    console.log('next render', postData);
    return (
        <Paper className={classes.paper}>
            <form
                autoComplete="off"
                noValidate
                className={`${classes.root} ${classes.form}`}
                onSubmit={handleSubmit}
            >
                <Typography variant="h6">New Project</Typography>
                <TextField
                    name="title"
                    variant="outlined"
                    label="Project name"
                    fullWidth
                    value={postData['title']}
                    onChange={handleChange}
                />
                <TextField
                    name="description"
                    variant="outlined"
                    label="Short description"
                    fullWidth
                    value={postData.description}
                    onChange={handleChange}
                />
                <TextField
                    name="url"
                    variant="outlined"
                    label="Website"
                    fullWidth
                    value={postData.url}
                    onChange={handleChange}
                />
                <TextField
                    name="tags"
                    variant="outlined"
                    label="Tags"
                    fullWidth
                    value={postData.tags}
                    onChange={handleChangeTags}
                />
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        className={classes.fileInput}
                        multiple={false}
                        accept="image/*"
                        onDone={({ base64 }) =>
                            setPostData((prevPostData) => ({
                                ...prevPostData,
                                image: base64,
                            }))
                        }
                    />
                </div>
                <Button
                    className={classes.buttonSubmit}
                    variant="contained"
                    type="submit"
                    color="primary"
                    size="large"
                    disabled={false}
                    fullWidth
                >
                    Send
                </Button>
                <Button
                    variant="contained"
                    onClick={clearPostData}
                    size="small"
                    color="secondary"
                    fullWidth
                    type="reset"
                >
                    Clear
                </Button>
            </form>
        </Paper>
    );
};

export default Form;

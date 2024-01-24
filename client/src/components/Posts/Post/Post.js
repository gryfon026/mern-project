import React from 'react';
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from '@material-ui/core';
import MoreHoriz from '@material-ui/icons/MoreHoriz';

import useStyle from './styles';

const Post = ({ post }) => {
    const classes = useStyle();
    console.log(post);
    return (
        <Card className={classes.card}>
            {post.image ? (
                <CardMedia
                    className={classes.media}
                    image={post.image}
                    alt={post.title}
                />
            ) : (
                <CardMedia
                    className={classes.media}
                    image={`/blank-grey.png`}
                    alt={post.title}
                />
            )}
            <div className={classes.overlay}>
                <CardActions>
                    <Button
                        style={{ color: 'white' }}
                        size="small"
                        onClick={() => {}}
                    >
                        <MoreHoriz fontSize="medium" />
                    </Button>
                </CardActions>
            </div>
            <CardContent>
                <div className="overlay">
                    <Typography sx={{ mb: 4 }} color="textSecondary">
                        {post.url || 'empty url'}
                    </Typography>
                    <Typography variant="body2">{post.description}</Typography>
                </div>
                <div className="overlay2"></div>
            </CardContent>
        </Card>
    );
};
export default Post;

import axios from 'axios';

const SERVER_PORT = process.env.SERVER_PORT || 5000;
const SERVER_URL = `http://localhost:${SERVER_PORT}/posts`;

export const fetchPosts = () => axios.get(SERVER_URL);
export const createPost = (newPost) => axios.post(SERVER_URL, newPost);

import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS'

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=ReduxBlog'

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${APIT_KEY}`);
    
    return {
        type: FETCH_POSTS,
        payload: request

    };
}
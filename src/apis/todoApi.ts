import axios from "axios";

const todoApi = axios.create({
  baseURL: process.env.REACT_APP_TODO_SERVER_URL
});

export default todoApi;

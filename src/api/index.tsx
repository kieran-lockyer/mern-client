import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3001"
  // baseURL: "https://ca-mern-server.herokuapp.com"
});

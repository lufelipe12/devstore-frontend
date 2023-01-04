import axios from "axios"

const apiDevstore = axios.create({
  baseURL: "http://localhost:3001/api/v1/",
})

export default apiDevstore

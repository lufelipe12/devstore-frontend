import axios from "axios"

/// could change to local api

const apiDevstore = axios.create({
  baseURL: "http://localhost:3001/api/v1/",
})

export default apiDevstore

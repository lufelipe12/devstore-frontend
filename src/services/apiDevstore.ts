import axios from "axios"

/// could change to local api

const apiDevstore = axios.create({
  baseURL: "https://devstore-backend-production.up.railway.app/api/v1/",
})

export default apiDevstore

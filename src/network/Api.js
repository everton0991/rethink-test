import axios from 'axios'


const getAuthorization = () => {
  const token = JSON.parse(localStorage.getItem("token"))
  
  if (token) {
    return `Bearer ${token}`
  }

  return null
}

export default axios.create({
  baseURL: 'https://rethink-webstack-flights.herokuapp.com/api',
  timeout: 5000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': getAuthorization()
  }
})

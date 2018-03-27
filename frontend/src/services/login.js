import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/login'

const login = async (credentials) => {
  console.log('username: ', credentials.username)
  console.log('password: ', credentials.password)
  // find user by email
  const response = await axios.post(baseUrl, credentials)
  return response.data
  //const response = await axios.post(baseUrl, credentials)
  //return response.data
}

export default { login }
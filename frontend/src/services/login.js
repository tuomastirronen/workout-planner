import axios from 'axios'
const loginUrl = 'http://localhost:3001/api/login'
//const userUrl = 'http://localhost:3001/api/users/'

const login = async (credentials) => {
  console.log('username: ', credentials.username)
  console.log('password: ', credentials.password)
  // find user by email
  const response = await axios.post(loginUrl, credentials)
  console.log(response.data)
  if(response.data.length === 0) {
    return null
  }
  return response.data
}

export default { login }
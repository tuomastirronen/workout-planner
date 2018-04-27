import axios from 'axios'
const loginUrl = 'http://localhost:3001/api/login'
//const userUrl = 'http://localhost:3001/api/users/'

const login = async (email, password) => {
  //console.log('login service ', email, password)
  let credentials = {
    username: email,
    password: password
  }
  //console.log('username: ', credentials.username)
  //console.log('password: ', credentials.password)
  // find user by email
  const response = await axios.post(loginUrl, credentials)
  console.log('axios ', response.data)
  if(response.data.length === 0) {
    return null
  }
  return response.data
}

// const registerUser = async (credentials) => {
//   console.log('register')
// }

export default { login }
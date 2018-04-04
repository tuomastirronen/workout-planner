import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/users/'
// http://localhost:3001/api/users/:user_id/routines

const getAllRoutines = async (id) => {
  let url = baseUrl.concat(id, '/routines')
  console.log(url)
  const response = await axios.get(url, id)
  console.log(response.data)
  return response.data
}

export default {
  getAllRoutines
}
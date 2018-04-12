import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/users/'
// http://localhost:3001/api/users/:user_id/routines

const getAllRoutines = async (id) => {
  let url = baseUrl.concat(id, '/routines')
  console.log(url)
  const response = await axios.get(url, id)
  console.log('axios routines ', response.data)
  return response.data
}

const showRoutine = async (userId, routineId) => {
  console.log('service show routine')
  let url = baseUrl.concat(userId, '/routines/', routineId)
  console.log(url)
  const response = await axios.get(url, userId)
  return response.data
}

export default { getAllRoutines, showRoutine }
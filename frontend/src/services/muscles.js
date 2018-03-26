import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/muscles'

const getAllMuscles = async () => {
  const response = await axios.get(baseUrl)
  console.log(response.data)
  return response.data
}

export default {
  getAllMuscles
}
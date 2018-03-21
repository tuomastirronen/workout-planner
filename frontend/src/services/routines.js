import axios from 'axios'
const baseUrl = 'http://localhost:7777/api/routines'

// TODO
const getAll = () => {
  return axios.get(baseUrl)
}

export default { getAll }

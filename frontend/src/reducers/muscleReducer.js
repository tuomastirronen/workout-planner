import muscles from '../services/muscles'

const reducer = (store = [], action) => {
  console.log('ACTION:', action)

  if (action.type==='VOTE') {
    const old = store.filter(a => a.id !==action.id)
    const voted = store.find(a => a.id === action.id)

    return [...old, { ...voted, votes: voted.votes+1 } ]
  }
  if (action.type === 'CREATE') {
    console.log(action.content)
    return store.concat(action.content)
  }

  if (action.type === 'INITIALIZE') {
    return store = action.content
  }

  return store
}

// export const initializeMuscles = (content) => {
//   return async (dispatch) => {
//     const content = await muscles.getAll()
//     //console.log(content)
//     dispatch({
//       type: 'INITIALIZE',
//       content
//     })
//   }
// }

export const initializeMuscles = () => {
  return async (dispatch) => {
    const m = await muscles.getAll()
    dispatch({
      type: 'INITIALIZE',
      data: m
    })
  }
}

export default reducer
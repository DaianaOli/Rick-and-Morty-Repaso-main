import axios from 'axios'
export const GET_ALL_CHARACTERS = 'GET_ALL_CHARACTERS'
export const POST_CHARACTER = 'POST_CHARACTER'
export const GET_EPISODES = 'GET_EPISODES'
export const GET_CHARACTER_BY_ID = 'GET_CHARACTER_BY_ID'

export function getCharacters({ name, order, page }) {
  return (dispatch) => {
    axios
      .get(
        `http://localhost:3001/characters?name=${name || ''}&order=${
          order || ''
        }&page=${page || 1}`
      )
      .then((characters) => {
        return dispatch({
          type: GET_ALL_CHARACTERS,
          payload: characters.data,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export function getEpisodes() {
  return (dispatch) => {
    axios
      .get('http://localhost:3001/episode')
      .then((episodes) =>
        dispatch({ type: GET_EPISODES, payload: episodes.data })
      )
  }
}

export function postCharacter(payload) {
  return async function (dispatch) {
    const newCharacter = await axios.post(
      'http://localhost:3001/characters/add',
      payload
    )
    console.log(newCharacter)
    return newCharacter
  }
}

export function getCharacterById(id) {
  return (dispatch) => {
    axios
      .get(`http://localhost:3001/characters/${id}`)
      .then((character) =>
        dispatch({ type: GET_CHARACTER_BY_ID, payload: character.data })
      )
  }
}

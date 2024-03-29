import axios from 'axios'
export const GET_ALL_CHARACTERS = 'GET_ALL_CHARACTERS'
export const POST_CHARACTER = 'POST_CHARACTER'
export const GET_EPISODES = 'GET_EPISODES'
export const GET_CHARACTER_BY_ID = 'GET_CHARACTER_BY_ID'
export const NEXT_PAGE = 'NEXT_PAGE'
export const PREVIOUS_PAGE = 'PREVIOUS_PAGE'

export function getCharacters({ name, order, page }) {
  return (dispatch) => {
    axios.get(`/characters?name=${name || ''}&order=${order || ''}&page=${page || 1}`)
      .then((characters) => {
        return dispatch({
          type: GET_ALL_CHARACTERS,
          payload: characters.data,
        })
      })
      .catch((err) => {
        return alert("Sorry, not found", err)
      })
  }
}

export function getEpisodes() {
  return (dispatch) => {
    axios
      .get('/episode')
      .then((episodes) =>
        dispatch({ type: GET_EPISODES, payload: episodes.data })
      )
  }
}

export function postCharacter(payload) {
  return async function (dispatch) {
    const newCharacter = await axios.post(
      '/characters/add',
      payload
    )
    console.log(newCharacter)
    return newCharacter
  }
}

export function getCharacterById(id) {
  return (dispatch) => {
    axios
      .get(`/characters/${id}`)
      .then((character) =>
        dispatch({ type: GET_CHARACTER_BY_ID, payload: character.data })
      )
  }
}

export function filterStatus(status) {
  // console.log(status)
  return {
    type: 'FILTER_STATUS',
    payload: status,
  }
}

export function filterSpecies(species) {
  return {
    type: 'FILTER_SPECIES',
    payload: species,
  }
}

export function filterLocation  (location) {
  return {
    type: 'FILTER_LOCATION',
    payload: location,
  }
}

export function filterAlphabetically(alphabet) {
  return {
    type: 'FILTER_ALPHABETICALLY',
    payload: alphabet,
  }
}

import { GET_ALL_CHARACTERS, GET_EPISODES,GET_CHARACTER_BY_ID } from './actions'

const initialState = {
  characters: {},
  characterById: {},
  episodes: [],
}

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_ALL_CHARACTERS:
      return {
        ...state,
        characters: payload,
      }
    case GET_EPISODES:
      return {
        ...state,
        episodes: payload,
      }
      case GET_CHARACTER_BY_ID:
      return {
        ...state,
        characterById: payload,
      }
    default: {
      return state
    }
  }
}

export default reducer




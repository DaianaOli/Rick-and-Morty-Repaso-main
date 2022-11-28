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
      case 'FILTER_STATUS':
      return {
        ...state,
        characters: {
          ...state.characters,
          result: state.characters.result.filter((e) => e.status === payload),
        },
      }
      case 'FILTER_SPECIES':
      return {
        ...state,
        characters: {
          ...state.characters,
          result: state.characters.result.filter((e) => e.species === payload),
        },
      }
      case 'FILTER_LOCATION':
      return {
        ...state,
        characters: {
          ...state.characters,
          result: state.characters.result.filter((e) => e.location.name === payload),
        },
      }
      case 'FILTER_ALPHABETICALLY':
        if (payload === 'A-Z') {
        return {
          ...state,
          characters: {
            ...state.characters,
            result: state.characters.result.sort((a, b) => {
              if (a.name > b.name) {
                return 1
              }
              if (a.name < b.name) {
                return -1
              }
              return 0
            }),
          },
        }
      } else if (payload === 'Z-A') {
        return {
          ...state,
          characters: {
            ...state.characters,
            result: state.characters.result.sort((a, b) => {
              if (a.name > b.name) {
                return -1
              }
              if (a.name < b.name) {
                return 1
              }
              return 0
            }),
          },
        }
      }

    default: {
      return state
    }
  }
}

export default reducer




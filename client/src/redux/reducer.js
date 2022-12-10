import { GET_ALL_CHARACTERS, GET_EPISODES, } from './actions'

const initialState = {
  characters: {},
  copyCharacters:{},
  episodes: [],
}

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_ALL_CHARACTERS:
      return {
        ...state,
        characters: payload,
        copyCharacters: payload,
      }
    case GET_EPISODES:
      return {
        ...state,
        episodes: payload,
      }
    case 'FILTER_STATUS':
      let status = state.copyCharacters.result
      return {
        ...state,
        characters: {
          ...state.characters,
          result: status.filter((e) => e.status === payload),
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
break
    default: {
      return state
    }
  }
}

export default reducer




const initialState = {
    volumeLevel: 1
}

function volume(state=initialState, action) {
    switch (action.type) {
        case 'SET_VOLUMELEVEL':
            return {
                 ...state,
                 volumeLevel: action.volumeLevel
            }
              
        default:
          return state
      }
}

export default volume
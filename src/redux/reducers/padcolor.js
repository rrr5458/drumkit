const initialState = {
    padColor: "#fff"
}

function padColor(state=initialState, action) {
    switch (action.type) {
        case 'SET_PADCOLOR':
            return {
                 ...state,
                 padColor: action.padColor
            }
              
        default:
          return state
      }
}

export default padColor
// reducers take in two things:

// 1. teh action (info about what happened)
// 2. copy of the current state

// set state to be default of empty along with the action
function posts(state = [], action) {
  switch (action.type) {
    case 'INCREMENT_LIKES' :
      console.log('incrementing likes!!')
      const i = action.index
      // update the state
      return [
        ...state.slice(0, i), // before the post we're updating
        {...state[i], likes: state[i].likes + 1}, // copy the object and add new number of likes
        ...state.slice(i + 1) // after the post we're updating
      ]  
    // return the updated state
    default:
      return state
  }
}

export default posts


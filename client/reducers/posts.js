// reducers take in two things:

// 1. teh action (info about what happened)
// 2. copy of the current state

// set state to be default of empty along with the action
function posts(state = [], action) {
  console.log(state, action)
  return state
}

export default posts


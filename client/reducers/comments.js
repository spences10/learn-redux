// every reducer runs every time there is an action
// what you do with that action is up to you 👍
function postComments(state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      // return the new state with the new comment
      return [...state, {
        user: action.author,
        text: action.comment
      }]
    case 'REMOVE_COMMENT':
      // need to return the new state without the deleted comment
      return [
        // from the start to the one we want to delete
        ...state.slice(0, action.i),
        // after teh deleted one
        ...state.slice(action.i + 1)
        // return the new state
      ]
    default:
      return state
  }
  return state
}

function comments(state = [], action) {
  if(typeof action.postId !== 'undefined') {
    return {
      // take current state
      ...state,
      // overwrite this post with a new one
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state
}

export default comments

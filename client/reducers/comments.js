// every reducer runs every time there is an action
// what you do with that action is up to you 👍
function comments(state = [], action) {
  console.log(state, action)
  return state
}

export default comments

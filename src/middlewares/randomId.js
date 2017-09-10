export default store => next => action => {
if (!action.generatedId) return next(action)

next({
  ...action,
  randomID: (new Date.now() + Math.random()).toString()
  })
}
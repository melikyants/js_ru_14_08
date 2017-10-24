export default store => next => action =>  {
  console.log('actionMiddleWare: ', action);
  if(!action.generatedId) next(action)
  next({
    ...action,
    randomId: (Date.now() + Math.random()).toString()
  })
};
'use strict'

import request from 'axios'

const createTodoRequest = (todo) => ({
  type: 'TODO_CREATE_REQUEST',
  payload: todo
})
const createTodoSuccess = (todo) => ({
  type: 'TODO_CREATE_SUCCESS',
  payload: todo
})
const createTodoFailure = (err) => ({
  type: 'TODO_CREATE_FAILURE',
  payload: err,
  error: true
})

export const createTodo = (name) => (dispatch) => {
  const todo = {
    name,
    completed: false
  }
  dispatch(createTodoRequest(todo))
  request
    .post('/api/todos', todo)
    .then((response) => {
      dispatch(createTodoSuccess(response.data))
    })
    .catch((response) => {
      dispatch(createTodoFailure(response.data))
    })
}

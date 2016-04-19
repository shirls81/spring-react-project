'use strict'

import { connect } from 'react-redux'
import AddTodo from '../components/AddTodo'
import { createTodo } from '../actions'

// There are no non-function props we care about, but we'll keep the variable
// stubbed out incase we need to
const mapStateToProps = null

const mapDispatchToProps = (dispatch) => ({
  onSubmit(value) {
    if (!value) return
    dispatch(createTodo(value))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo)

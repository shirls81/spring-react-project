import React from 'react'

const Todo = (props) => {
  var styles = {
    textDecoration: props.completed ? 'line-through' : 'none',
    cursor: 'pointer'
  }
  // We're going to add a delete button and also allow a `onDeleteClick` prop
  return (
    <div>
      <span style={styles} onClick={props.onClick}>{props.name}</span>
      &nbsp;
      <button onClick={props.onDeleteClick}>X</button>
    </div>
  )
}

export default Todo

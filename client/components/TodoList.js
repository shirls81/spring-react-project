'use strict'

import React from 'react'
import Todo from './Todo'
import styles from './TodoList.css' // Add this

class TodoList extends React.Component {

  componentWillMount() {
    this.props.init()
  }

  render() {
    // Add this line to not render the list if there are no todos
    if (!this.props.todos.length) return null
    // Add the classNames to the <ul> and the <li>
    return (
      <ul className={styles.list}>
        {
          this.props.todos.map((todo) => {
            return (
              <li key={todo.id} className={styles.listItem}>
                <Todo
                  name={todo.name}
                  completed={todo.completed}
                  onClick={() => this.props.onTodoClick(todo)}
                  onDeleteClick={() => this.props.onTodoDeleteClick(todo)}
                />
              </li>
            )
          })
        }
      </ul>
    )
  }

}

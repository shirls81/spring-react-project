'use strict'

import React from 'react'
import AddTodoContainer from '../containers/AddTodoContainer'
import FilteredTodoList from '../containers/FilteredTodoList'
import Filters from './Filters'
import styles from './App.css' // Add this import

class App extends React.Component {

  render() {
    // Add the app className
    return (
      <div className={styles.app}>
        <AddTodoContainer />
        <Filters />
        <FilteredTodoList />
      </div>
    )
  }

}

export default App

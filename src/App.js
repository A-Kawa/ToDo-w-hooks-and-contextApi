import React from 'react'
import './App.css'
import { Icon } from 'semantic-ui-react'
import { ToDoList } from './components/TodoList'
import Store from './store/ToDoStore'
import 'semantic-ui-css/semantic.min.css'

const App = () => {
  return(
    <Store>
      <div className="App">
        <h1>
          <Icon name="hand peace outline"/>
            Hello hooks!
          <Icon flipped='horizontally' name="hand peace outline"/>
        </h1>
        <ToDoList />
      </div>
    </Store>
    
  )
}

export default App;

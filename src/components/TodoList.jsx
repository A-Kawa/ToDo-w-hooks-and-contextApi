import React, {useState} from 'react'
import { ToDo } from './ToDo'
import { toDoContext } from '../store/toDoContext'
import { AddTodoForm } from './AddTodoForm'
import { Button, Icon } from '../../node_modules/semantic-ui-react';
import '../styles/TodoList.scss'

export const ToDoList = () => {
    const [showAdd, setShowAdd] = useState(false);
    return(
        <div className="todo-list-main">
          <toDoContext.Consumer>
            {(content) => (
               <React.Fragment>
                    <Button className='button-add' onClick={() => setShowAdd(!showAdd)}> <Icon name="plus"/> Add new ToDo </Button>
                    {showAdd ?  <AddTodoForm /> : null}
                    {content.myState.map(el => (
                        <div key={el.id}>
                            <ToDo element={el} />
                        </div>
                    ))}
                </React.Fragment>               
            )}
            </toDoContext.Consumer>    
        </div>
    )
}

import React from 'react'
import { Icon } from 'semantic-ui-react'
import { toDoContext } from '../store/toDoContext'

export const DeleteTodoButton = (props) => {
    return(
        <toDoContext.Consumer>
                {(content) => (
                    <Icon onClick={()=> {
                        content.deleteTodo(props.id)
                    }} className='delete' name='ban' color='red' style={{position: 'absolute', right: '11%', marginTop: '-15px'}}></Icon>
                )}
        </toDoContext.Consumer>
    )
}
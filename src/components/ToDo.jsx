import React from 'react'
import '../styles/ToDo.scss'
import { Container } from 'semantic-ui-react'
import { DeleteTodoButton } from './DeleteTodoButton'
import { StatusButton } from './StatusButton'

export const ToDo = (props) => {
    return(
        <div className="todo-main">
            <Container text>
                <DeleteTodoButton id={props.element.id}/>
                <p>{props.element.text}</p>
                <p>Done:
                    <StatusButton status={props.element.status} id={props.element.id}/>
                </p>
                
            </Container>
        </div>
      
    )
}

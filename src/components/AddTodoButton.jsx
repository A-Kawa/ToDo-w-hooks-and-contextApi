import React from 'react'
import { Button } from '../../node_modules/semantic-ui-react';
import { toDoContext } from '../store/toDoContext'
import '../styles/AddTodoButton.scss'

export const AddTodoButton = (props) => {

    return(
        <div className='addtodobutton-main'>
            <toDoContext.Consumer>
                {(content) => (
                    <Button className='button-add' onClick={() => {
                        if(props.props.text!=='' && props.props.select!==null){
                            content.addNewTodo(props.props.text,props.props.status)
                        }else{}
                    }}> Add </Button>
                )}
            </toDoContext.Consumer>
        </div>
    )
}

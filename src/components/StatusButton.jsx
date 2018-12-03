import React from 'react'
import { Icon } from 'semantic-ui-react'
import { toDoContext } from '../store/toDoContext'

export const StatusButton = (props) => {
    let color, name;

    if(props.status){
        color = 'green'
        name = 'checkmark box'
    }else{
        color = 'red'
        name = 'close'
    }

    return(
        <toDoContext.Consumer>
            {(content) => (
                <Icon name={name} color={color} onClick={()=> {
                    content.changeStatus(props.id)
                }}/>            
            )}
        </toDoContext.Consumer>
    )
}
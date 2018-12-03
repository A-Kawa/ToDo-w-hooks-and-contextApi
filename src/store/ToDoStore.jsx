import React, { useState } from 'react'
import { toDoContext } from './toDoContext'

const searchSmallestId = (state) => {
    const [id, setID] = useState(1);
    const checkID = (state) => {
        return state.some(el => el.id === id)    
    }
    if(checkID(state)){
        setID(id+1)
        checkID(state)
    }else{
        return id;
    }
    return id
}

const ToDoStore = (props) => {
    const [myState, setState] = useState([
        {id: 1, text: 'MakeAppToDoApp', status: true}
    ])
    let newId = searchSmallestId(myState)
    return(
        <toDoContext.Provider value={{
                myState,
                addNewTodo: (text, status) => {
                    setState(
                        [
                            ...myState,
                            {id: newId,text,status}
                        ]
                )},
                deleteTodo: (id) => {
                    let toDos = [...myState]
                    let pos = toDos.find((element) => {
                        return element.id === id
                    })
                    pos = toDos.indexOf(pos)
                    toDos.splice(pos,1)
                    setState([
                        ...toDos
                    ])},
                changeStatus: (id) => {
                    let toDos = [...myState]
                    let pos = toDos.find((element) => {
                        return element.id === id
                    })
                    pos = toDos.indexOf(pos)
                    toDos[pos].status = !toDos[pos].status
                    setState([
                        ...toDos
                    ])}
            }}>
            {props.children}
        </toDoContext.Provider>
    )
}

export default ToDoStore

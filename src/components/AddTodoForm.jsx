import React, {useState} from 'react'
import { Input, Select, Grid } from 'semantic-ui-react'
import { AddTodoButton } from './AddTodoButton'
import '../styles/AddTodoForm.scss'

export const AddTodoForm = () => {
    const [text, setText] = useState('')
    const [status, setStatus] = useState(null)

    return (
        <div className="addtodoform-main">
            <div className='inputs'>
                <Grid>
                    <Grid.Column width={2} textAlign={"center"}>
                        <Input value={text} placeholder='What you need to do?' onChange={(event) => setText(event.target.value)}/>
                        <Select value={status} placeholder='Set todo status' onChange={(event,data) => setStatus(data.value)} options={[{value:true, text: "Done"},{value:false,text:"To do"}]}/>
                    </Grid.Column>        
                </Grid>  
            </div>
            <div onClick={() => {setText(''); setStatus(null)}}>
                <AddTodoButton props={{text, status}}/>
            </div>
        </div>
    )
}
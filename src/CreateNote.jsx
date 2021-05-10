import React, { useState } from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Button from '@material-ui/core/Button';

export const CreateNote = (props) => {

    const [expand, setexpand] = useState(false);
    const [note, setnote] = useState({
        title: '',
        content: ''
    });

    const inputText=(event)=>{
        
        const {name,value}=event.target;

        setnote((prev)=>{
            return {
                ...prev,
                [name]:value,

            }
        })
    }

    const addEvent=()=>{
        props.passNote(note);
        setnote({
            title:'',
            content:''
        })
    }
    const expandIt=()=>{
        setexpand(true);
    }
    const backNormal=()=>{
        setexpand(false);
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin:'10px' }}>
            <form>
            
                <div class="card text-dark bg-warning mb-3" style={{ width: '20rem' }}>
                { expand?
                <div class="card-header">  
                    <input type="text" 
                    value={note.title} 
                    name='title'
                    onChange={inputText} 
                    placeholder="Title"
                     style={{ backgroundColor: '#ffc107', border: 'none' }} />
                    </div>:null}

                    <div class="card-body">

                        <textarea 
                        rows="" cols="22" 
                        value={note.content}
                        name='content'
                         onChange={inputText} 
                         onClick={expandIt}
                         onDoubleClick={backNormal}
                         placeholder="write a note...">

                        </textarea>
                      {expand? <Button onClick={addEvent}> <AddCircleIcon  style={{ fontSize: 'large' }} /></Button>:null}

                    </div>

                </div>
            </form>





        </div>
    )
}

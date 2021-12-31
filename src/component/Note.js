import React , {useContext} from 'react'
import noteContext from '../context/notes/noteContext'
import Noteitem from './Noteitem'

function Note() {
    const context = useContext(noteContext);
    const {note , setnote} = context;
    return (
        <>
            <Noteitem note={note}/>
        </>
    )
}

export default Note

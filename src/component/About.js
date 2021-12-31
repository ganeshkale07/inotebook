import React , {useContext} from 'react'
import noteContext from '../context/notes/noteContext';

function About() {
    const a = useContext(noteContext);
    
    return (
        <div>
            these is about {a.state.name} and {a.state.gender} 
        </div>
    )
}

export default About

import React ,{useContext} from 'react'
import Note from './Note'

function Home() {


    return (
        <div className="conatiner">
            <div className="formclass">
                <h2>Add Your Notes here :</h2>
            </div>
            <div>
                <Note />
            </div>
        </div>
    )
}

export default Home

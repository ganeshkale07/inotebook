import NoteContext from './noteContext';
import {useState} from 'react'

function NoteState(props) {
    const initialNote = [
        {
          "_id": "61cc5c09704eba1ae579522d",
          "user": "61cc3bfebf652804a0b9f6ed",
          "title": "workout",
          "description": "workout is done now",
          "tag": "general",
          "date": "2021-12-29T13:00:57.146Z",
          "__v": 0
        },
        {
          "_id": "61cc5c1a704eba1ae5795230",
          "user": "61cc3bfebf652804a0b9f6ed",
          "title": "workout crossfit",
          "description": "workout is done now",
          "tag": "general",
          "date": "2021-12-29T13:01:14.207Z",
          "__v": 0
        },
        {
          "_id": "61cc5c24704eba1ae5795232",
          "user": "61cc3bfebf652804a0b9f6ed",
          "title": "workout lean muscle mass",
          "description": "workout is done now",
          "tag": "general",
          "date": "2021-12-29T13:01:24.336Z",
          "__v": 0
        },
        {
          "_id": "61cee58db0542887af134031",
          "user": "61cc3bfebf652804a0b9f6ed",
          "title": "workout type cardio",
          "description": "workout is done now",
          "tag": "fitness",
          "date": "2021-12-31T11:12:13.540Z",
          "__v": 0
        }
      ]
    const [note, setnote] = useState(initialNote)
    
    return (
        <NoteContext.Provider value={{note , setnote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState

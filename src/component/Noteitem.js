
import React from 'react'

function Noteitem(props) {
    const note = props.note;
    return (
        <div className='row'>
            {note.map( note => {
                return <div className="card col-md-3 my-3 mx-3" >
                <div className="card-body">
                  <h5 className="card-title">{note.title}</h5>
                  <h5><span class="badge badge-lg bg-success">{note.tag}</span></h5>
                  <p className="card-text">{note.description}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada facilisis justo, eu lobortis neque efficitur quis. Fusce tempus porttitor velit. Sed sit amet pulvinar nisl. Curabitur scelerisque pretium placerat. Fusce quis turpis ex. Nulla vulputate metus in dui pulvinar, et euismod lorem molestie.Proin vehicula eget odio</p>
                  <b  className="card-link">{note.date}</b>
                  
                </div>
              </div>
            })}
        </div>
    )
}

export default Noteitem

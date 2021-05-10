import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

 const Note = (props) => {

  const deleteItem=()=>{
    props.deleteItem(props.id);
  }
    return (
        <div class="card text-dark bg-warning mx-3 my-3" style={{maxWidth: '14rem'}}>
        <div class="card-header"style={{backgroundColor:'#dc3545'}}>{props.title}</div>
        <div class="card-body">
          
          <p class="card-text">{props.content} <DeleteIcon onClick={deleteItem}/></p>
         
        </div>
      </div>
    )
}
export default Note;
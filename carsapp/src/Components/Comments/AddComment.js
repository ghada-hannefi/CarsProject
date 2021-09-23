import React ,{useState} from 'react'
const AddComment=({addNewComment})=>{

 const[addComment,setAddComment]=useState('Add Comment')

 const handleComment=(e)=>{
     e.preventDefault()
     addNewComment(addComment)
     setAddComment('')
 }
 return(
     <form  onSubmit={handleComment}>
  
     <input id="commentinput" type="text" className='form-control'
     value={addComment} 
     onChange={(e)=>setAddComment(e.target.value)}/>
     <input  id="login" className="btn" type="submit"/>

      </form>
 )
}
export {AddComment}
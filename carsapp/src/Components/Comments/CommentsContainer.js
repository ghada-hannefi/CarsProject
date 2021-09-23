import React, { useState, useEffect, Fragment } from 'react'
import {AddComment }from'./AddComment'
import axios from'axios'
import './CommentsContainer.css'

const CommentsContainer = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments').then(res =>{
            const tab=res.data.slice(0,3)
            setComments(tab)}).catch(err => console.log(err))
        
    }, [])
    console.log(comments)


    const addNewComment = (newComment) => {
        setComments([...comments, {
            id: Math.random(),
            body: newComment
        }])
    }
    const Comments = comments.map(comment => {
        return (<div key={comment.id} className=" darker mt-4 float-right "><span><img  id="image"src="https://i.imgur.com/CFpa3nK.jpg" alt="" className="rounded-circle" />{comment.email}</span>
            <br/>
            <p>{comment.body}</p>
        </div>)
    });



    return (
        <Fragment>
            <div id="comments">
            <h1>Comments</h1>
            <div className="container">{Comments}</div>
            <AddComment addNewComment={addNewComment}/>

            </div>
       
        </Fragment>
    )
}
 export {CommentsContainer}
import React, { useState } from 'react'

const EventHandling = () => {

    const [upvotes, setUpvotes] = useState(10);

    let likes = 0;

    const handleClick = () => {
        console.log('button clicked');
        likes++;
        console.log('Likes : '+likes);
    }

    const addUpvote = () => {
        // upvotes++; // ❌
        setUpvotes(upvotes + 1); // ✅
    }


  return (
    <div>
        <h1 className='text-center'>EventHandling</h1>
        <hr/>

        <button className='btn btn-primary' onClick={ () => { alert('button was clicked') } } >Handling Click Event</button>

        <button className='btn btn-primary ms-5' onClick={handleClick}>Using Defined Function <i class="fas fa-thumbs-up"></i> {likes} </button>

        <button className='btn btn-danger ms-5' onClick={addUpvote}> <i class="fas fa-heart"></i> {upvotes} </button>

    </div>
  )
}

export default EventHandling
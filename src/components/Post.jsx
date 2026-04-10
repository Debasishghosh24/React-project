import React from 'react'
import { useState } from 'react'

const Post = (props) => {
 
    const [like, setLike] = useState(0);

    function increment() {
        setLike(like + 1);
    }

  return (
    <div>
        <h1>{props.title}</h1>
       <h1>Like Count: {like}</h1>
       <button className='cursor-pointer h-8 w-10 bg-blue-300 rounded-2xl' onClick={increment}>👍</button>

    </div>
  )
}

export default Post

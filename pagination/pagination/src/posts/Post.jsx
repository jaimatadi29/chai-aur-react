import { useEffect, useState } from 'react'
// import './App.css';

const Post = ({posts, loading}) => {
   // console.log(posts)
    if(loading) {
        return (
            <div>Loading .... </div>
        )
    } else {
    return (
        <div>
            {posts.length && posts?.map((post, index) => {
                <div key={index}>
                    <p>{post?.title}</p>
                </div>
            })}
        </div>
    )
}
}
export default Post;
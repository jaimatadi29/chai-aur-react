import React from "react";


const Post = ({ posts, loading, postPerPage, handlePagination }) => {
    
    if (loading) {
        <h2>Loading ....</h2>
    }
    return (
        <div>
            {posts?.length && posts?.map((item, index) => {
                return (
                    <div key={index}>
                        <ul>
                            <li>{item.title}</li>
                        </ul>
                    </div>
                )
            })}
        </div>
    )

}

export default Post;
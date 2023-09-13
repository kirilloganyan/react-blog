import React from 'react';
import Post from "./Post";
import {TransitionGroup} from "react-transition-group";

const PostList = ({posts,title,remove}) => {
    if(!posts.length){
        return (
            <h1 style={{textAlign:'center'}}>
                Посты не найдены
            </h1>
        )
    }
    return (
        <div>
            <h1 style={{textAlign :"center"}}>{title}
            </h1>
            {posts.map((post,index) =>
                <Post remove={remove} number={index+1} post={post} key={post.id} />
            )}
        </div>
    );
};


export default PostList;
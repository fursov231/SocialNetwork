import React from "react";
import c from './Post.module.css';



const Post = (props) => {



    return (
        <div className={c.content}>
            <div>
                {props.message}
            </div>
            <div>
                <span>like </span>  {props.likesCount}
            </div>
        </div>
            )};

            export default Post;
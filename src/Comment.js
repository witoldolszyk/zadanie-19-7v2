import React from 'react';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, editComment, removeComment}) => 
    <li>
        {text} <span>votes: {votes}</span>
    </li>;

export default Comment;
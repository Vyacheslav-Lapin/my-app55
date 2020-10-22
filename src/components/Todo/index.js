import React from 'react';

export default ({userId, id, title, completed}) => {

    // console.log(todo);

    // const {userId, id, title, completed} = todo;

    return <li>
        userId : {userId}<br/>
        id : {id}<br/>
        title : {title}<br/>
        completed : {completed}
    </li>
};
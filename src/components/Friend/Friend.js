import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'

const Friend = ({ friend }) => {
    console.log(friend)
    const { id, name, email, username } = friend;
    return (
        <div className='friend'>
            <h2>Name : {name}</h2>
            <h4>Email: {email}</h4>
            <p><small>userName: <Link to={`/friend/${id}`}>{username}</Link></small></p>
        </div>
    );
};

export default Friend;
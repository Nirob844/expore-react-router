import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    console.log(friend);
    return (
        <div>
            <h1>Name:{friend.name}</h1>
            <p>ph number:{friend.phone}</p>
            <h2>everything you need to know</h2>
        </div>
    );
};

export default FriendDetails;
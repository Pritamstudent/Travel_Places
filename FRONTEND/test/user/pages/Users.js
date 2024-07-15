import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [{
        id: 'ul',
        name: 'Pritam Sharma',
        image: 'https://www.thefashionisto.com/wp-content/uploads/2022/11/Male-Model-Brown-Coat-Turtleneck-Sweater-Outfit.jpg',
        places: 3
    }];
    return <UsersList items = {USERS} /> ;
};

export default Users;
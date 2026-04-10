import React from 'react'
import { UserData } from '../Data/userdata';
import UserCard from './UserCard';

const UserList = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {UserData
    .map(function(obj) {
      console.log(obj);
      return(
        <UserCard Name={obj.name} Age={obj.age} City={obj.city}/>
      )
    })}
      
    </div>
  )
}

export default UserList

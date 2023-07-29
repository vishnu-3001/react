import React from 'react';
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';
import { useState } from 'react';

function App() {
  const [users,setUsers]=useState([]);
  const submitHandler=(userData)=>{
    setUsers((prevState)=>{
      return [...prevState,userData]
    })
  }
  return (
    <div>
      <AddUser onSubmit={submitHandler}></AddUser>
      <UserList users={users}></UserList>
    </div>
  );
}

export default App;

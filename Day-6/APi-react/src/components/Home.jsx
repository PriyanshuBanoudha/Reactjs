import React from "react";

const Home = ({ users,box }) => {
  return (
    <>
      <h2>Child Component</h2>
      

      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.id}</h3>
          <p>{user.name}</p>
          <p>{user.usernamename}</p>
          <p>{user.email}</p>
        </div>
        
      ))}
      {
        console.log(users)
        
      }
    </>
  );
};

export default Home;
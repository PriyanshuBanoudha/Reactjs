
import React, { useState } from "react";
import Home from "./components/Home";
import Card from "./components/Card";

const App = () => {
  const url = "https://jsonplaceholder.typicode.com/users";

  const [users, setUsers] = useState([]);

  async function api() {
    const response = await fetch(url);
    const allData = await response.json();
    setUsers(allData);
  }



  const [box,setBox] = useState([])
  const cardUrl = "https://fakestoreapi.com/products"

 async function loadCards() {
    const response = await fetch(cardUrl);
      const productData = await response.json();
      setBox(productData);
    
    
  }
  // using promises 

  // function fetch(url){
  //   .then()
  // }

  console.log(users);
  console.log(box);




  return (
    <>
      <button onClick={api}>Load Users</button>


      <Home users={users}  />

      <button onClick={loadCards}>
        Load Cards
      </button>

      <Card box={box} />
    </>
  );
};

export default App;
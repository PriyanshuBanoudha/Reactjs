// // import React from 'react'
// // import TodoApp from './components/Todo'
// // import Card from './components/Card'
// // import { useState } from 'react'

// // const App = () => {

// // const [data,setdata] = useState([])
// //   const cardUrl ="http://localhost:8080/todos";
// //  async function loadCards() {
// //     const response = await fetch(cardUrl);
// //       const productData = await response.json();
// //       setBox(productData);

// //   return (
// //     <>
// //     {/* <TodoApp/> */}
// //     <Card data={data} />

// //     </>
// //   )
// // }
// // }

// // export default App;



// import React, { useEffect, useState } from "react";
// import Card from "./components/Card";
// import User from "./components/User";

// const App = () => {
//   const [data, setdata] = useState([]);
//   const cardUrl = "http://localhost:8080/todos";
//   async function loadCards() {
//     try {
//       const response = await fetch(cardUrl);
//       const productData = await response.json();
//       setdata(productData);
//     } catch (err) {
//       console.log(err);
//     }
//   }
//   useEffect(() => {loadCards();}, []);


// const [userData,setUserData] = useState([]);
// const userUrl = "http://localhost:8080/users"
// async function loadUsers() {
//   try {
//     const response = await fetch (userUrl)
//     const user = await response.json()
//   }
//   catch (err){
//     console.log(err);
//   }
// }

// useEffect(()=>{loadUsers();},[])

//   return (
//     <>
//       <Card data={data} />
//       <User userData = {userData}/>
//     </>
//   );
// };

// export default App;




import React, { useEffect, useState } from "react";
import API from "./api";
import "./App.css";


function App() {


  const [students, setStudents] = useState([]);



  const getStudents = async () => {

    const response = await API.get("/students");

    setStudents(response.data);

  };



  // GET DATA WHEN PAGE LOADS

  useEffect(() => {

    getStudents();

  }, []);




  // ADD STUDENT

  const addStudent = async () => {


    const student = {

      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      course: "Computer Science",
      phone: "9876543210",
      address: "Lucknow"

    };


    await API.post("/students", student);


    getStudents();


  };





  // UPDATE STUDENT

  const updateStudent = async (id) => {


    const student = {

      name: "Updated Name",
      email: "updated@gmail.com",
      course: "IT",
      phone: "9999999999",
      address: "Delhi"

    };


    await API.put(`/students/${id}`, student);


    getStudents();


  };






  // DELETE STUDENT

  const deleteStudent = async (id) => {


    await API.delete(`/students/${id}`);


    getStudents();


  };





  return (

    <div>


      <h1>Student List</h1>


      <button onClick={addStudent}>
        Add Student
      </button>



      <table>


        <thead>

          <tr>

            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Action</th>

          </tr>

        </thead>



        <tbody>


          {
            students.map((student) => (


              <tr key={student.id}>


                <td>{student.id}</td>

                <td>{student.name}</td>

                <td>{student.email}</td>

                <td>{student.course}</td>


                <td>


                  <button onClick={() => updateStudent(student.id)}>
                    Edit
                  </button>


                  <button onClick={() => deleteStudent(student.id)}>
                    Delete
                  </button>


                </td>


              </tr>


            ))

          }


        </tbody>


      </table>


    </div>

  );


}


export default App;
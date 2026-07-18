

// const database = require('dotenv').config();



// const express = require("express");
// const cors = require("cors");
// const db = require("./db");
// const app = express();


// // const port = process.env.PORT;
// // console.log(port);



// app.use(cors());
// app.use(express.json());
// const PORT = 8080;



// app.get("/todos", (req, res) => {
//   const sql = "SELECT * FROM todos";

//   db.query(sql, (err, result) => {
//     if (err) {
//       console.log("Query Error:", err);
//       return res.status(500).json({ error: err.message });
//     }

//     console.log(result); 
//     res.json(result);   
//   });
// });

// app.get("/users",(req,res)=>{
//   const sql = "SELECT * FROM user";

//   db.query(sql,(err,result)=>{
//     if(err){
//       console.log("query error : ",err);
//       }
//       console.log(result);
//       res.json(result);
//   })

// })


// app.post("/todos/add", (req, res) => {
//   const { id, task} = req.body;

//   db.query(
//     "INSERT INTO todos (title, completed) VALUES (?, ?)",
//     [id, task],
//     (err, result) => {
//       if (err) {
//         console.log("Query Error:", err);
//         return res.status(500).json({ error: "Database Error" });
//       }

//       res.json({
//         message: "Todo added successfully",
//         id: result.insertId,
//       });
//     }
//   );
// });




// app.get("/todos/:id", (req, res) => {

//   // Get id from URL parameter
//   const id = req.params.id;


//   // SQL query
//   const sql = "SELECT * FROM todos WHERE id = ?";


//   db.query(sql, [id], (err, result) => {

//     if (err) {
//       console.log("Database Error:", err);

//       return res.status(500).json({
//         message: "Database error"
//       });
//     }


//     // If todo not found
//     if (result.length === 0) {
//       return res.status(404).json({
//         message: "Todo not found"
//       });
//     }


//     // Send todo data
//     res.json({
//       message: "Todo fetched successfully",
//       todo: result[0]
//     });

//   });

// });


// app.listen(PORT, () => {
//   console.log(`Server successfully running on port ${PORT}`);
// });





const express=require("express");
const cors=require("cors");
const db=require("./db");

const app=express();

app.use(cors());
app.use(express.json());


// GET ALL

app.get("/students",(req,res)=>{

db.query("SELECT * FROM students",(err,result)=>{

if(err){
return res.status(500).json(err);
}

res.json(result);

});

});



// GET ONE

app.get("/students/:id",(req,res)=>{

const id=req.params.id;

db.query("SELECT * FROM students WHERE id=?",[id],(err,result)=>{

if(err){
return res.status(500).json(err);
}

if(result.length===0){
return res.json({message:"Student Not Found"});
}

res.json(result[0]);

});

});



// INSERT

app.post("/students",(req,res)=>{
const {name,email,course,phone,address}=req.body;
db.query(
"INSERT INTO students(name,email,course,phone,address) VALUES(?,?,?,?,?)",
[name,email,course,phone,address],
(err,result)=>{
if(err){
return res.status(500).json(err);
}
res.json({
message:"Student Added"
});
});
});




// UPDATE

app.put("/students/:id",(req,res)=>{

const id=req.params.id;

const {name,email,course,phone,address}=req.body;

db.query(
"UPDATE students SET name=?,email=?,course=?,phone=?,address=? WHERE id=?",
[name,email,course,phone,address,id],
(err,result)=>{

if(err){
return res.status(500).json(err);
}

res.json({
message:"Student Updated"
});

});

});




// DELETE

app.delete("/students/:id",(req,res)=>{

const id=req.params.id;

db.query(
"DELETE FROM students WHERE id=?",
[id],
(err,result)=>{

if(err){
return res.status(500).json(err);
}

res.json({
message:"Student Deleted"
});

});

});




// SEARCH

app.get("/search",(req,res)=>{

const name=req.query.name;

db.query(
"SELECT * FROM students WHERE name LIKE ?",
[`%${name}%`],
(err,result)=>{

if(err){
return res.status(500).json(err);
}

res.json(result);

});

});



app.listen(5000,()=>{

console.log("Server Running");

});


const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`);
});


/**
 * import React,{useEffect,useState} from "react";
import API from "./api";
import "./App.css";


function App(){


const [students,setStudents]=useState([]);



const getStudents=async()=>{

    const response = await API.get("/students");

    setStudents(response.data);

};



// GET DATA WHEN PAGE LOADS

useEffect(()=>{

    getStudents();

},[]);




// ADD STUDENT

const addStudent=async()=>{


const student={

name:"Rahul Sharma",
email:"rahul@gmail.com",
course:"Computer Science",
phone:"9876543210",
address:"Lucknow"

};


await API.post("/students",student);


getStudents();


};





// UPDATE STUDENT

const updateStudent=async(id)=>{


const student={

name:"Updated Name",
email:"updated@gmail.com",
course:"IT",
phone:"9999999999",
address:"Delhi"

};


await API.put(`/students/${id}`,student);


getStudents();


};






// DELETE STUDENT

const deleteStudent=async(id)=>{


await API.delete(`/students/${id}`);


getStudents();


};





return(

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
students.map((student)=>(


<tr key={student.id}>


<td>{student.id}</td>

<td>{student.name}</td>

<td>{student.email}</td>

<td>{student.course}</td>


<td>


<button onClick={()=>updateStudent(student.id)}>
Edit
</button>


<button onClick={()=>deleteStudent(student.id)}>
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
 */
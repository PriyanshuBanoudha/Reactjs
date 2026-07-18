import React from 'react'
// import First from './components/First'
// import DisplayArray from './components/DisplayArray'
// import ObjectsDis from './components/ObjectsDis'
// import Login from './components/Login'
import Form from './components/Form'


const App = () => {

  // const details = {
  //   "Name1" : "Priyanshu",
  //   "age" : 20 
  // }

  const arr = [1,2,3,4,5,6,7,8,9,10]
  const names = ["Vishal","vaibhav"]
  // const person = [{
  //   name: "Alice",
  //   age: 25,
  //   city: "New York",
  // }];
  const Data = [
  {
    id: 1,
    name: "Priyanshu Sharma",
    age: 25,
    city: "Lucknow",
    profession: "Frontend Developer",
    company: "OpenTech Solutions",
    email: "priyanshu@example.com",
    phone: "+91 98765 43210",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Vishal Kumar",
    age: 23,
    city: "Delhi",
    profession: "UI/UX Designer",
    company: "Creative Studio",
    email: "vishal@example.com",
    phone: "+91 91234 56789",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Vaibhav Singh",
    age: 24,
    city: "Mumbai",
    profession: "Backend Developer",
    company: "TechNova",
    email: "vaibhav@example.com",
    phone: "+91 99887 66554",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Ananya Gupta",
    age: 22,
    city: "Bengaluru",
    profession: "Software Engineer",
    company: "Google",
    email: "ananya@example.com",
    phone: "+91 90123 45678",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "Rahul Verma",
    age: 27,
    city: "Pune",
    profession: "Data Analyst",
    company: "Infosys",
    email: "rahul@example.com",
    phone: "+91 98700 11223",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
  id: 6,
  name: "Neha Singh",
  age: 24,
  city: "Jaipur",
  profession: "Software Engineer",
  company: "Microsoft",
  email: "neha@example.com",
  phone: "+91 98765 11111",
  image: "https://randomuser.me/api/portraits/women/6.jpg",
},
{
  id: 7,
  name: "Arjun Mehta",
  age: 26,
  city: "Hyderabad",
  profession: "DevOps Engineer",
  company: "Amazon",
  email: "arjun@example.com",
  phone: "+91 98765 22222",
  image: "https://randomuser.me/api/portraits/men/7.jpg",
},
{
  id: 8,
  name: "Sneha Kapoor",
  age: 23,
  city: "Chandigarh",
  profession: "Graphic Designer",
  company: "Adobe",
  email: "sneha@example.com",
  phone: "+91 98765 33333",
  image: "https://randomuser.me/api/portraits/women/8.jpg",
},
{
  id: 9,
  name: "Rohan Patel",
  age: 28,
  city: "Ahmedabad",
  profession: "Full Stack Developer",
  company: "TCS",
  email: "rohan@example.com",
  phone: "+91 98765 44444",
  image: "https://randomuser.me/api/portraits/men/9.jpg",
},
{
  id: 10,
  name: "Kavya Nair",
  age: 25,
  city: "Kochi",
  profession: "Mobile App Developer",
  company: "Accenture",
  email: "kavya@example.com",
  phone: "+91 98765 55555",
  image: "https://randomuser.me/api/portraits/women/10.jpg",
},
{
  id: 11,
  name: "Aditya Roy",
  age: 27,
  city: "Kolkata",
  profession: "Cyber Security Analyst",
  company: "IBM",
  email: "aditya@example.com",
  phone: "+91 98765 66666",
  image: "https://randomuser.me/api/portraits/men/11.jpg",
},
{
  id: 12,
  name: "Pooja Sharma",
  age: 22,
  city: "Noida",
  profession: "QA Engineer",
  company: "Capgemini",
  email: "pooja@example.com",
  phone: "+91 98765 77777",
  image: "https://randomuser.me/api/portraits/women/12.jpg",
},
{
  id: 13,
  name: "Aman Verma",
  age: 29,
  city: "Indore",
  profession: "Cloud Engineer",
  company: "Oracle",
  email: "aman@example.com",
  phone: "+91 98765 88888",
  image: "https://randomuser.me/api/portraits/men/13.jpg",
},
{
  id: 14,
  name: "Meera Joshi",
  age: 26,
  city: "Bhopal",
  profession: "Business Analyst",
  company: "Deloitte",
  email: "meera@example.com",
  phone: "+91 98765 99999",
  image: "https://randomuser.me/api/portraits/women/14.jpg",
},
{
  id: 15,
  name: "Karan Malhotra",
  age: 30,
  city: "Gurugram",
  profession: "Project Manager",
  company: "Wipro",
  email: "karan@example.com",
  phone: "+91 98766 00000",
  image: "https://randomuser.me/api/portraits/men/15.jpg",
}
];





  return( 
    <>
      {/* <First name="anshu" age = {20}  />
      <DisplayArray myarr={arr} />
      <ObjectsDis Person={person} Person2 = {person1}/> */}
      <Login Data={Data} value={id} />
      {/* <Navbar/> */}
      {/* <Form/> */}

    </>
  )
  
}

export default App

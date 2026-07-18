

// import { createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import {Routes,Route,Link} from "react-router-dom"
import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

/*   

  method

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path : "Contact",
    element : <Contact />
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

*/

/* Method 

function App(){
  return(
    <Routes>
    <Route path="/" element ={<Home/>}/>
    </Routes>
  )
}

export default App

*/

function App(){
  return(
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </>
  )
}

export default App
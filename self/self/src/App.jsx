import React from 'react'
import Navbar from './components/Navbar'

const App = () => {

  const users = [
    {
      name:"xyx",
      college:"IIT"
    }
  ]

  return (
    <>
    <h1 className='bg-amber-400'>hello</h1>
      <Navbar users={users}/>
    </>
  )
}

export default App

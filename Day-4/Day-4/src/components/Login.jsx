// import React from 'react'
// import Card from './Card'

// const Login = ({Data}) => {
//   return (
//     <div>
     
//       {
//         Data.map((value)=>(
//         <Card newdata={Data} key={value.id}/>
//       ))
//       }
//     </div>
//   )
// }

// export default Login


import React from 'react'
import Card from './Card'

const Login = ({ Data }) => {
  return (
    <div>
      {Data.map((value, index) => (
        <Card
          value={value}
          key={index}
        />
      ))}
    </div>
  )
}

export default Login
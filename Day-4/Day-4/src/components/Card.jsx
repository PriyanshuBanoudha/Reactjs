// import React from 'react'

// const Card = ({value}) => {
//   return (
//     <div>
//         <h1>{value.name}</h1>
//         <h1>{value.age}</h1>
//         <h1>{value.city}</h1>
      
//     </div>
//   )
// }

// export default Card



import React from 'react'

const Card = ({ value }) => {
  return (
    <div>
      {/* <h1>{value.name}</h1>
      <h2>{value.age}</h2>
      <h3>{value.city}</h3> */}

        <div className="card" style={{ width: "18rem" }}>
      <img
        src={value.image}
        className="card-img-top"
        alt={value.name}
      />

      <div className="card-body">
        <h5 className="card-title">{value.name}</h5>

        <p className="card-text">
          {value.profession}
        </p>

        <a href={value.profile} className="btn btn-primary">
          View Profile
        </a>
      </div>
    </div>




    </div>
  )
}

export default Card
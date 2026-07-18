import React from 'react'

const DisplayArray = ({myarr}) => {
  return (
    <>
        <div>
            <ul>
            {
                myarr.map((indx)=>
                    <li key={indx}>{indx}</li>
                )
            }

            </ul>
        </div>
      
    </> 
  )
}

export default DisplayArray

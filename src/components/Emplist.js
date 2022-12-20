import React from 'react'




const Emplist = props => {
 
  const updateemp = (empid) =>{
  props.setselectedemp(empid)
  } 

return (
    <div>
      {
        props.data.map(data =>{
          return<p key = {data.id}onClick={() => {updateemp(data.id)}} style={{cursor:'pointer'}}role = "button"> {data.name} ID : {data.id} Postion: {data.department}  </p>
        })

      
      
      
      }
    </div>
  )
}

Emplist.propTypes = {}

export default Emplist
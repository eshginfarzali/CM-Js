import axios from 'axios'
import React, { useEffect, useState } from 'react'


const url ='https://jsonplaceholder.typicode.com/users'

function Users() {
    const [users, setUsers] = useState([])
    useEffect(()=>{
     axios.get(url).then(({data})=>{
 setUsers(data)
     })   
    },[]) //mount


    useEffect(()=>{
        
    })

  return (
  <>
{ 
 users.map((user)=>{
    return(
        <div key={user.id}>
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
            <hr />
        </div>
    )
  })
  
  }
  </>
  )
}

export default Users

// commond --rafce
import React, { useEffect, useState} from 'react'

import "./User.css"
import axios from "axios"

const User = () => {



  const [users, setUsers]= useState([])
  useEffect(()=> {
    const fetchData = async()=>{
      try{

         const response = await axios.get("http://localhost:9000/api/users"); 
         setUsers(response.data);

      }catch(error){
        console.log("Error while fetching data", error);

      }
    };
    fetchData();
  },[]);
  
  return (
    <div className='userTable'>

      <button type="button" class="btn btn-primary" background-color="#2b85a4">Add User 
      <i class="fa-solid fa-user-plus"></i>
      </button>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="co1">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Email</th>
            <th scope="coll">Address</th>
            <th scope="coll">Action</th>
          </tr>
        </thead>
        <tbody>

          {users.map((user,index)=>{
            return (
              <tr>
              <td>{index+1}</td>
          <td>{user.name}</td>
          <td>{user.age}</td>
          <td>{user.email}</td>
          <td>{user.address}</td>
          <td className='Action-btn'>

          <button type="button" className="btn btn-info">
          <i class="fa-sharp-duotone fa-solid fa-pen-to-square"></i> 
          </button>
          


          <button type="button" class="btn btn-danger">
          <i class="fa-solid fa-trash"></i> 
          </button>
          </td>
          </tr>
            )

          })}
          
         
        </tbody>
      </table>
      
    </div>
  )
}

export default User;

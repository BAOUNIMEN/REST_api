import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteUser } from '../redux/actions'
import EditUsers from './EditUsers'

const Usercard = ({user}) => {
    const dispatch=useDispatch()
  return (
 
         <div style={{border:"2px solid black",padding:"5px",width:"300px"}}>
            <h3>{user.fullName}</h3>
            <p> <b>Email:</b> {user.email} </p>
            <p> <b>Phone:</b> {user.Phone}</p>
            <img src={user.avatar} alt="" height="50" width="50" />
            <button style={{background:"#f44336", borderRadius:"4px",padding: "10px" }} onClick={()=>dispatch(deleteUser(user._id))} >DELETE</button>
            {/* <button style={{background:"green", borderRadius:"4px",padding: "10px" }}  edit={EditUsers}>Edit</button> */}
            <EditUsers user ={user}/>
        </div>
    
  )
}

export default Usercard
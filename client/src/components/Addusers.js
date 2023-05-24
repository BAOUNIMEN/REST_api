import React, { useState } from "react";
import { addUser } from "../redux/actions";
import { useDispatch } from "react-redux";

const Addusers = () => {
 const [fullName, setFullName]= useState('')
 const[email, setEmail]= useState('')
 const [phone, setPhone]= useState('')
 const [avatar, setAvatar]= useState('')
 const dispatch = useDispatch()
const handleSubmit = (e)=>{
    e.preventDefault();
    const newUser ={
        fullName,
        email,
        Phone : phone,
        avatar
    }
    dispatch(addUser(newUser))
}


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" value = {fullName} onChange={(e)=>setFullName(e.target.value)}/>
        <label>Email</label>
        <input type="text" value = {email}onChange={(e)=>setEmail(e.target.value)}/>
        <label>Phone</label>
        <input type="text" value = {phone}onChange={(e)=>setPhone(e.target.value)}/>
        <label>Avatar</label>
        <input type="text" value = {avatar}onChange={(e)=>setAvatar(e.target.value)}/>
        <button type="submit" >Confirm</button>
      </form>
    </div>
  );
};

export default Addusers;

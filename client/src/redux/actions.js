import axios from 'axios'
import {  ADD_USER, DELETE_USER, EDIT_USER, GET_USERS } from "./axctionTypes"

export const getUsers =  () => async(dispatch)=> {
    try {
        const res = await axios.get("/getUsers")
        console.log(res)
        dispatch({
            type: GET_USERS,
            payload: res.data,
        });
    } catch (error) {
        alert ('get error')
    }
}
export const addUser = (newUser) => async(dispatch) => {
    try {
        const res = await axios.post("/addUsers",newUser)
        console.log(res.data)
        dispatch({
            type:ADD_USER,
            payload:res.data
        })
    } catch (error) {
        alert("add error")
    }
}

export const deleteUser = (id) => async(dispatch) => {
    try {
        const res = await axios.delete(`/deleteUser/${id}`)
        console.log(res.data)
        dispatch({
            type:DELETE_USER,
            payload:id
        })
    } catch (error) {
        alert("delete error")
    }
}

export const editUsers = (editedUser) => async (dispatch) => {
  try {
       const res = await axios.put(`/update/${editedUser.id}`, editedUser)
       dispatch({
        type:EDIT_USER,
        payload: res.data
       })
  } catch (error) {
     alert('edit error')
  }

} 
import React, { useState } from "react";

import {Button, Form, FormControl, Modal} from "react-bootstrap"
import { useDispatch } from "react-redux";
import { editUsers } from "../redux/actions";

const EditUsers = ({ user }) => {
  console.log(user)
  const [show, setShow] = useState(false);

  const [fullName, setFullName] = useState(user.fullName);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.Phone);
  const [avatar, setAvatar] = useState(user.avatar);

  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const editedUser = {
      id: user._id,
      fullName,
      email,
      Phone : phone,
      avatar,
    };
    dispatch(editUsers(editedUser));
    handleClose();
  };
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        EDIT
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header> 
        <Modal.Body>
          <Form onSubmit={handleSubmit} >
            <FormControl
              placeholder="FullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            ></FormControl>
            <FormControl
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></FormControl>
            <FormControl
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            ></FormControl>
            <FormControl
              placeholder="Avatar"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            ></FormControl>
            <Button variant="secondary" >
            Close
          </Button>
          <Button variant="primary" type="submit" >
            Save Changes
          </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
       </Modal>
    </div>
  );
};

export default EditUsers;

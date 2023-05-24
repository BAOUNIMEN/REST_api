import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/actions";
import Usercard from "./Usercard";

const Userlist = ({}) => {
  const { users, loading } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
      marginTop:'5%'
    }}>
      {loading ? (
        <h3>loading...</h3>
      ) : (
        <>
          {users.map((el) => (
            <Usercard user={el} />
          ))}
        </>
      )}
    </div>
  );
};

export default Userlist;

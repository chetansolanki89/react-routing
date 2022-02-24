import React from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  // const params=useParams();
  // const userId=params.userId;

  const { userId } = useParams(); //Destructured the object returned by the useParams()

  return <div>Details of User {userId}</div>;
};

export default UserDetails;

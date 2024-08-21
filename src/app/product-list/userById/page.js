"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const UserById = () => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/users/${singleUserById}`)
      .then((res) => setUserData(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(userData);

  const singleUserById = 1;

  const { address, password, phone, username, email, name } = userData;

  return (
    <div>
      <div className="text-center">
        <h1 className="text-xl">User Details</h1>
      </div>
      <div>
        <div className="flex gap-4">
          <p>First Name: {name.firstname}</p>
          <p>Last Name: {name.lastname}</p>
        </div>
        <div>
          <p>Username : {username}</p>
          <p>Phone : {phone}</p>
          <p>password : {password}</p>
          <p>Email: {email}</p>
        </div>
        <div>
          <p className="text-xl">user address</p>
        </div>
        <div>
          <p>user address : {address.city}</p>
        </div>
      </div>
    </div>
  );
};

export default UserById;

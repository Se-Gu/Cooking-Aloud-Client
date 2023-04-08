import React, { useState, useEffect } from "react";

export default function App() {
  const [userData, setUserData] = useState([{}]);
  const [adminData, setAdminData] = useState([{}]);

  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      });
    fetch();
    fetch("/api/admins")
      .then((response) => response.json())
      .then((data) => {
        setAdminData(data);
      });
    fetch();
  }, []);

  return (
    <div>
      <div>USERS</div>
      {userData?.users?.map((user) => {
        return <div>{user}</div>;
      })}
      <div>ADMINS</div>
      {adminData?.admins?.map((admin) => {
        return <div>{admin}</div>;
      })}
    </div>
  );
}

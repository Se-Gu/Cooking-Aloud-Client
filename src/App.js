import React, { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [userData, setUserData] = useState([{}]);
  const [adminData, setAdminData] = useState([{}]);

  const baseURL = "https://cooking-aloud-server-cmaq3kqazq-ey.a.run.app/api/";

  useEffect(() => {
    axios.get(baseURL + "/users").then((response) => {
      setUserData(response.data);
    });
    axios.get(baseURL + "/admins").then((response) => {
      setAdminData(response.data);
    });
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

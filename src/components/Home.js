import React, { useEffect, useState } from "react";
import axios from "axios";
const Home = () => {
  const [userDetals, setUserDetals] = useState([]);
  console.log("userDetals==>", userDetals);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => res)
      .then((response) => setUserDetals(response.data))
      .catch((error) => console.log("error==>", error));
  }, []);

  return (
    <>
      <div className="mx-2 mt-5">
        <h6 className="text-center text-danger-emphasis">USER DETAILS</h6>
        <table className="table border">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL ADDRESS</th>
              <th>PHONE NUMBER</th>
              <th>ADDRESS</th>
              <th>USERNAME</th>
            </tr>
          </thead>
          <tbody>
            {userDetals.map((item, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.address.city}</td>
                  <td>{item.username}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;

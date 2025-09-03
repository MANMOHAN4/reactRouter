import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  /*
  // without useLoader Hook
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/MANMOHAN4")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  */

  const data = useLoaderData();

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="avatar" />
    </div>
  );
}

export default Github;

// This method first gets loaded at main.jsx
export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/MANMOHAN4");
  return response.json();
};

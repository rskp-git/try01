"use client";
import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  const [userdata, setUserdata] = useState("Hello")
  const [num, setNum] = useState(10);
  const getData = async () => {
  const response = await axios.get("https://picsum.photos/v2/list");
  console.log(JSON.stringify(response.data));
  setUserdata("Love You");
  }
  return (
    <>
      <div>
        <button onClick={getData}>Click</button>
        <br/>
        {userdata}
      </div>
    </>
  );
};

export default page;

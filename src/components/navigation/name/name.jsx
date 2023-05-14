import React from "react";
import { Divider } from "@mui/material";
import "./name.css";

const Name = () => {
  return (
    <div>
      <p>Stap 1/5</p>

      <h3>Lets start with your name</h3>

      <p>Please fill the details below</p>

      <Divider className="divider" />

      <div className="input-name">
        <label htmlFor="">Enter Name</label>
        <input className=" imput" type="text" />
        <div className=" flex-end">
          <button className="button"> Next</button>
        </div>
      </div>
    </div>
  );
};
export default Name;

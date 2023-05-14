import React from "react";
import "./navber.css";
import { Link } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Paper, Box } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EditLocationIcon from "@mui/icons-material/EditLocation";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import DoorbellIcon from "@mui/icons-material/Doorbell";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import Name from "./name/name";
const Navber = () => {
  const [changestyle, setchangestyle] = useState(true);

  const handleStyles = () => setchangestyle(!changestyle);

  return (
    <div className="header">
      <div className="header-left">
        <div className="first">
          <h1>Uzor</h1>
        </div>
        <div className="center" id={changestyle ? "hidden" : ""}>
          <Link className="nav-link" to="">
            Home
          </Link>
          <Link className="nav-link" to="">
            About
          </Link>
          <Link className="nav-link" to="">
            Questions
          </Link>
        </div>
        <div className="third">
          <MenuIcon onClick={handleStyles} />
        </div>
      </div>

      <div className=" border-color">
        <div className="inner-card">
          <div className="skill-level-card">
            <h3 className="intro-heading">My Skill Level</h3>
            <p className="intro-heading">
              Answer the following questions to begin your plan
            </p>
          </div>
          <div className="second-div">
            <div className="thrid-div">
              <div className="Your-name">
                <div className="name">
                  <h3 className="typography">Your Name</h3>
                  <p className="typography">First,Middle & Last Name</p>
                </div>
                <div className="icon-background">
                  <PersonIcon fontSize="large" />
                </div>
                {/* <div className="dot"> </div> */}
              </div>

              <div className="Your-name">
                <div className="name">
                  <h3 className="typography">
                    City <br /> Location
                  </h3>
                  <p className="typography"></p>
                </div>
                <div className="icon-background">
                  <PersonIcon fontSize="large" />
                </div>
                {/* <div className="dot"> </div> */}
              </div>

              <div className="Your-name">
                <div className="name">
                  <h3 className="typography">
                    Telephone <br />
                    Number
                  </h3>
                </div>
                <div className="icon-background">
                  <PersonIcon fontSize="large" />
                </div>
                {/* <div className="dot"> </div> */}
              </div>
              <div className="Your-name">
                <div className="name">
                  <h3 className="typography">
                    House <br /> Address
                  </h3>
                </div>
                <div className="icon-background">
                  <PersonIcon fontSize="large" />
                </div>
                {/* <div className="dot"> </div> */}
              </div>

              <div className="Your-name">
                <div className="name">
                  <h3 className="typography">
                    Country of <br />
                    Residence
                  </h3>
                </div>
                <div className="icon-background">
                  <PersonIcon fontSize="large" />
                </div>
                {/* <div className="dot"> </div> */}
              </div>
            </div>
            <div className="forth-div">
              <Name />
            </div>
          </div>
        </div>
      </div>
      <Box>
        <h1>box2</h1>
      </Box>
    </div>
  );
};

export default Navber;

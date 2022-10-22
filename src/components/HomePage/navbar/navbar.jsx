import React, {useState} from "react";
import Navbutton from "../../../common/navbutton";
import { NavbarStyle } from "./navbar.style";
import { Buttons } from "../../../common/buttons";
import image from '../images/Frame.png';
import { Link, Outlet } from "react-router-dom";
import RewardYourTeacherIcon from "../../../common/RewardYourTeacherIcon"; 
import { FaBars } from "react-icons/fa";
import shadows from "@material-ui/core/styles/shadows";
export default function Navbar() {
  const [show, setShow] = useState(false)
  const ShowBars = () =>{
    setShow(!show)
  }
  return (
    <NavbarStyle>
      <RewardYourTeacherIcon className="reward" />
      <FaBars className="bars" onClick={ShowBars} />
      <div className="link">
        {Navbutton.map((buttons) => {
          const { id, value, url } = buttons;
          return (
            <div key={id} className="navdiv">
              <Link to={url} className={value === "Home" ? "active" : "text"}>
                {value}
              </Link>
            </div>
          );
        })}
        <Buttons
          className="btn"
          text="Login"
          background="#80B918"
          color="white"
          url="/login"
        />
      </div>
      {show && (
        <div className="dropDown">
          <Link className="linkdiv" to="/">
            <p>Home</p>
          </Link>
          <Link className="linkdiv" to="/about">
            <p>About</p>
          </Link>
          <Link className="linkdiv" to="/contact">
            <p>Contact</p>
          </Link>
          <Link className="linkdiv" to="login">
            <p>Login</p>
          </Link>
        </div>
      )}
    </NavbarStyle>
  );
}




import React from 'react'
import { DropDownStyle} from './dropdown.style'
import user from './User.png'
import settings from './setting.png'
import logout from './logout.png'
import help from './help.png'
import { useNavigate } from 'react-router-dom'

export default function DropDown({ confirmation,option}) {
  const navigate = useNavigate();
  const AccountRoute = () =>{
    console.log(option)
    if(option == "teacher"){
    navigate("/teacher/editprofile")
  }
  else{
    navigate("/student/editprofile")
  }
}
  return (
    <DropDownStyle>
      <div className="userDiv">
        <img src={user} alt="" className="userImageDiv" />
        <p className="userText" onClick={()=>{
          AccountRoute();
        }}>Account</p>
      </div>
      <div className="userDiv">
        <img src={settings} alt="" className="userImageDiv" />
        <p className="userText">Settings</p>
      </div>
      <div className="userDiv">
        <img src={help} alt="" className="userImageDiv" />
        <p className="userText">Help Center</p>
      </div>
      <div className="userDiv">
        <img src={logout} alt="" className="userImageDiv" />
        <p className="userText" onClick={confirmation}>
          Logout
        </p>
      </div>
    </DropDownStyle>
  );
}

import React from 'react'
import RewardYourTeacherIcon from '../../common/RewardYourTeacherIcon';
import { StudentNotificationStyle } from './StudentNotification.style'
import overview from "../HomePage/images/Overview.png";
import notification from "../HomePage/images/Notification.png";
import profilepicture from "../HomePage/images/ProfilePicture.png";
import logout1 from "../HomePage/images/Logout.png";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import DropDown from '../DropDown/dropdown';
import axios from 'axios';
import { useEffect } from 'react';
import NavBarSideBar from '../../common/NavBarSideBar';
import { toast } from 'react-toastify';

export default function StudentNotification() {
const[notification,setNotification] = useState([]);
  async function FetchNotification() {
    //  const location = new Location()
    // console.log(location.state.school.schoolName);
    const token1 = localStorage.getItem("token");
    const token = "Bearer " + token1.substring(8, token1.length - 1);
    const res = await axios
      .get(
        "http://localhost:9001/api/v1/notification/student",
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      )
      .then((res) => {
        setNotification((res.data.data));
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    FetchNotification();
  }, []);

  const [confirmation, setConfirmation] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const Confirmation = () => {
    setConfirmation(!confirmation);
  };

    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("token-info");
        navigate("/teacher/login");
      };
  return (
    <StudentNotificationStyle>
<NavBarSideBar show={true} option = "student"/>
<div className='container3'>
<p className='topText3'>Notifications</p>
{
  notification.map((notifications)=>{
    const{date,message} = notifications;
    return(
<div className='notificationDiv'>
  <div className='detailsDiv'>
    <p className='timeText'>
{date}
    </p>
    <p className='detailText'>
    {message}
    </p>
  </div>
  <p>

  </p>
</div>
    )
  })
}

</div>



    </StudentNotificationStyle>
  )
}

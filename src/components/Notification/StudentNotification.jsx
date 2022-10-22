import React from 'react'
import { StudentNotificationStyle } from './StudentNotification.style'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import NavBarSideBar from '../../common/NavBarSideBar';


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

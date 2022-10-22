import React, { useState } from "react";
import { ViewStudentProfileStyle } from "./ViewStudentProfile.style";
import { RiCloseFill } from "react-icons/ri";
import Logo from "../HomePage/images/profile-image.png";
import thumb from "../HomePage/images/thumbs-up.png";
import axios from "axios";
import LoadingRing from "../../common/LoadingRing";
import { toast, ToastContainer } from "react-toastify";

export default function ViewStudentProfile({ ShowModal, studentId, studentName, studentEmail, studentPhone, studentSchool ,transactionId}) {
  console.log("this is the student id",studentId)
const token1 = localStorage.getItem("token");
const token = "Bearer " + token1.substring(8, token1.length - 1);
const appreciate = "Appreciate Student";
const [loading,setLoading] = useState(false);
const[isClicked,setIsClicked] = useState(false);
console.log("this is the transaction id",transactionId)
const AppreciateStudent = async () => {
  setLoading(true);
    try {
      const resp = await axios.post(
        `http://localhost:9001/api/v1/appreciate-student/${transactionId}`,
        {},
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      if (resp.status === 200) {
        setIsClicked(true)
        toast("Student Appreciated");
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast(error.response.data.message); 
    }
};
  return (
    <ViewStudentProfileStyle>
      <div className="modal-container">
        <div className="modal">
          <div className="head">
            <p className="header-text">Profile details</p>
            <div className="close">
              <RiCloseFill size={"24px"} onClick={ShowModal} />
            </div>
          </div>
          <div className="profile-details">
            <img src="https://api-private.atlassian.com/users/8f525203adb5093c5954b43a5b6420c2/avatar" alt="" className="studentImage"/>
            <div className="name-and-school">
              <p className="name">{studentName}</p>
              <p className="school">{studentSchool}</p>
            </div>
          </div>
          <div className="others">
            <p className="top-text">Other info</p>
            <p className="email">{studentEmail}</p>
            <p className="phone">{studentPhone}</p>
          </div>

          <div
            className="btn-container"
            onClick={() => {
              AppreciateStudent();
            }}
          >
            <img src={thumb} alt="" />
            <button className="btn">
              {loading ? <LoadingRing /> : appreciate}
            </button>
          </div>
          <ToastContainer />
        </div>
      </div>
    </ViewStudentProfileStyle>
  );
}

// RiCloseFill

import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { ColorRing } from "react-loader-spinner";
import { SendRewardStyle } from "./sendreward.style";
import SuccessModal from "../Modal/SuccessModal/SuccessModal";
import LoadingRing from "../../common/LoadingRing";
const SendReward = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();
const [modal,setModal] = useState(false);
   const location = useLocation();
   const teacherDetails = location.state.teacher;
   const token1 = localStorage.getItem("token");
   const token = "Bearer " + token1.substring(8, token1.length - 1);
const send = "Send";


  const handleClose = () => {
    setModal(false);
  };
  const handleSubmit = async (e) => {
    function close(){
      setModal(false)
    }
 
    setLoading(true);
    e.preventDefault();

    try {
      const resp = await axios.post(
        "http://localhost:9001/api/v1/student/sendReward",
        {
          amount: amount,
          teacherName: teacherDetails.name,
          teacherPhone: teacherDetails.phoneNumber,
        },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      if (resp.status === 200) {
        setModal(true);
        console.log("this got executed")
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast(error.response.data.message);
    
    }
  };
  return (
    <SendRewardStyle>
      {modal && (
        <SuccessModal
          teacherName={teacherDetails.name}
          amountSent={amount}
          handleClose={handleClose}
        />
      )}
      <form onSubmit={handleSubmit}>
        <div className="topDiv"></div>
        <div className="bottomDiv">
          <div className="textDiv">
            <div className="loginTextDiv">
              <p className="LoginText">Fill Your Details Below</p>
            </div>
            <div className="LoginText2Div">
              <label htmlFor="email" className="LoginText2">
                Name
              </label>
            </div>
            <input
              type="text"
              className="firstInput"
              onChange={(e) => setName(e.target.value)}
              value={teacherDetails.name}
            ></input>
            <div className="LoginText2Div">
              <p className="LoginText2">Phone Number</p>
            </div>
            <input
              type="text"
              className="firstInput"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={teacherDetails.phoneNumber}
            ></input>
            <div className="LoginText2Div">
              <p className="LoginText2">Amount</p>
            </div>
            <input
              type="text"
              className="firstInput"
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
            ></input>
            <div className="submitButtons">
              {/* <button
                type="submit"
                className="submitButton1"
                IsLoading={loading}
                
              > */}
                 <button type="submit" className="submitButton1" onClick={handleSubmit}>
          {!loading && send}
          {loading && <LoadingRing />}
              </button>
              <div
                className="submitButton2"
              >
                <Link className="backLink" to="/student/dashboard">
                  Back
                </Link>
              </div>
            </div>
            <ToastContainer />
          </div>
        </div>
      </form>
    </SendRewardStyle>
  );
};

export default SendReward;

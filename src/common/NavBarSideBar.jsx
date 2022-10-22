import styled from "styled-components";
import React, { useState } from "react";
import schoolImage from "../components/HomePage/images/school.png";
import DropDown from "../components/DropDown/dropdown";
import RewardYourTeacherIcon from "./RewardYourTeacherIcon";
import overview from "../components/HomePage/images/Overview.png";
import notification from "../components/HomePage/images/Notification.png";
import profilepicture from "../components/HomePage/images/ProfilePicture.png";
import logout1 from "../components/HomePage/images/Logout.png";
import LogoutModal from "../components/Modal/LogoutModal/LogoutModal";
import { Link, useNavigate } from "react-router-dom";

export default function NavBarSideBar({ option, height, show }) {
  const [dropDown, setDropDown] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [showSchool, setShowSchool] = useState(show);

  const navigate = useNavigate();
  const profileName = localStorage
    .getItem("first")
    .substring(1, localStorage.getItem("first").length - 1);
  const Confirmation = () => {
    setConfirmation(!confirmation);
  };
  const profilePics = localStorage.getItem("picture");
  let url;
  if (profilePics != null) {
    url = profilePics.substring(1, profilePics.length - 1);
  } else {
    url =
      "https://api-private.atlassian.com/users/8f525203adb5093c5954b43a5b6420c2/avatar";
  }

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };
  console.log("this is the profile pics", profilePics);
  return (
    <NavBarStyle height={height}>
      {dropDown && <DropDown confirmation={Confirmation} option={option} />}

      <div className="topDiv">
        <RewardYourTeacherIcon />
        <div
          className="profileDiv"
          onClick={() => {
            setDropDown(!dropDown);
          }}
        >
          <img className="profilePicture" src={url} alt="Display pics" />
          <p className="profileName">{profileName}</p>
        </div>
      </div>
      <div className="sideAndBodyDiv">
        <div className="sideDiv">
          <Link to={`/${option}/overview`} className="linkDiv">
            <div className="OverviewDiv">
              <img src={overview} alt="" className="overviewImage" />
              <p className="overviewText">Overview</p>
            </div>
          </Link>
          {showSchool && (
            <Link to={`/${option}/schools`} className="linkDiv">
              <div className="schoolDiv">
                <img src={schoolImage} alt="" className="schoolImageDiv" />
                <p className="schoolText">Send Reward</p>
              </div>
            </Link>
          )}
          <Link to={`/${option}/notification`} className="linkDiv">
            <div className="OverviewDiv">
              <img src={notification} alt="" className="overviewImage" />
              <p className="overviewText">Notification</p>
            </div>
          </Link>
          <div className="logout">
            <img src={logout1} alt="" className="overviewImage" />
            <a className="logoutText" onClick={(e) => logout()}>
              Logout
            </a>
          </div>
          {confirmation && (
            <LogoutModal logout={logout} confirmation={Confirmation} />
          )}
        </div>
      </div>
    </NavBarStyle>
  );
}

export const NavBarStyle = styled.div`
  .topDiv {
    display: flex;
    flex-direction: row;
    /* width: 1440px; */
    max-width: 100%;
    height: 96px;
    left: 0px;
    top: 0px;
    background: #ffffff;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
    padding-left: 32px;
    padding-right: 75px;
    box-shadow: 0px 8px 15px -15px #111;
  }
  .profilePicture {
    width: 36px;
    height: 36px;
  }
  .profileDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .linkDiv {
    text-decoration: none;
  }
  .profileName {
    width: 46px;
    height: 19px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    margin-left: 10px;
    color: #012a4a;
  }
  .sideDiv {
    width: 17%;
    left: 0px;
    top: 0px;
    box-shadow: 0px 8px 19px -15px #111;
    display: flex;
    flex-direction: column;
    background: #ffffff;
    padding-bottom: 40px;
    height: ${(props) => (props.height ? props.height : 730)}px;
  }
  .OverviewDiv {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .overviewText {
    width: 117px;
    height: 22px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    color: #03435f;
    margin-left: 15px;
  }
  .schoolDiv {
    width: 100%;
    /* padding-left: 60px; */
    display: flex;
    flex-direction: row;
    justify-content: center;
    cursor:pointer;
    align-items: center;
    margin-left: 0px;
  }
  .schoolText {
    width: 115px;
    height: 22px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    color: #03435f;
    margin-left: 6px;
  }
  .schoolImageDiv {
    height: 24px;
    width: 24px;
    left: 0px;
    top: 0px;
    border-radius: 0px;
    margin-right: 12px;
  }
  .OverviewDiv:hover {
    background: #55a630;
  }
  .sideAndBodyDiv {
    width: 100%;
  }
  .WalletBodydiv {
    margin-top: -30px;
    width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .sideAndBodyDiv {
    height: 725px;
    padding: 0px;
    display: flex;
  }
  .topWalletTextDiv {
    margin-left: 205px;
    width: 100%;
  }
  .topWalletText {
    width: 800px;
    height: 39px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    margin-left: 53px;
    /* identical to box height */
    color: #03435f;
  }
  .topWalletDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 840px;
    height: 197px;
    background: #ffffff;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.04);
    display: flex;
    flex-direction: row;
    justify-content: center;
    justify-content: space-around;
    background-image: linear-gradient(to right, #ffffff, #e1f5e5);
  }
  .walletDiv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: space-around;
  }
  .transactionDiv {
    width: 840px;
    height: 387px;
    margin-top: 20px;
    background: #ffffff;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.04);
  }
  .text {
    background-image: linear-gradient(to right, #ffffff, #8ee89f);
    background-color: red;
    width: 100px;
  }
  .walletText {
    width: 75px;
    height: 19px;
    left: 80px;
    top: 24px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 0px;
    color: #55a630;
  }
  .amount {
    width: 176px;
    height: 48px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    margin-top: 0px;
    margin-bottom: 0px;
    color: #03435f;
  }
  .totalMoneyRecieved {
    width: 200px;
    height: 19px;
    left: 80px;
    top: 117px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #c4c4c4;
  }
  .Active {
    height: 100%;
    width: 520px;
  }
  .ActiveText {
    width: 30px;
    height: 15px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    /* identical to box height */
    margin-left: 500px;
    color: #55a630;
    background-color: white;
    border-radius: 20px;
  }
  .transactionTopDiv {
    display: flex;
    flex-direction: row;
    padding: 10px;
    height: 20px;
    box-shadow: 0px 8px 19px -15px #111;
  }
  .MostRecent {
    width: 98px;
    height: 19px;
    left: 24px;
    top: 24px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #03435f;
  }
  .Transact {
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    border: 1px solid rgba(0, 0, 0, 0.06);
    box-shadow: 0px 8px 19px -15px #111;
  }
  .new {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    width: 58px;
    height: 20px;
    background: #55a630;
    padding-left: 15px;
    border-radius: 50px;
    color: #ffffff;
    margin-left: 650px;
  }
  .newTextDiv {
    width: 100%;
  }
  .trans1 {
    display: flex;
  }
  .logout {
    padding: 10px;
    margin-top: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: rgba(128, 185, 24, 0.1);
  }
  .logoutText {
    width: 81px;
    height: 22px;
    color: #55a630;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-decoration: none;
    margin-left: 15px;
    cursor: pointer;
  }
  .schoolDiv:hover {
    background: #55a630;
  }


  .schoolText:hover {
    color: white;
  }
  .OverviewDiv:hover {
    background-color: #55a630;
  }
  }
  @media only screen and (max-width: 450px) {
    .profileDiv {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-right: 4px;
    }
    .sideDiv {
      display: none;
      /* width: 17%;
      left: 0px;
      top: 0px;
      box-shadow: 0px 8px 19px -15px #111;
      display: flex;
      flex-direction: column;
      background: #ffffff;
      padding-bottom: 40px;
      height: ${(props) => (props.height ? props.height : 730)}px; */
    }
    .WalletBodydiv {
      margin-top: -30px;
      width: 1200px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border: 1px solid black;
    }
    .profilePicture {
      width: 36px;
      height: 36px;
    }
  }
`;

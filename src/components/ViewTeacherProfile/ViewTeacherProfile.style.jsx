import styled from "styled-components";

export const ViewTeacherProfileStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  .modal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    max-width: 480px;
    margin: 200px auto;
    background: #fff;
    border-radius: 10px;
    height: 300px;
  }
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
    width: 20%;
    left: 0px;
    top: 0px;
    box-shadow: 0px 8px 19px -15px #111;
    display: flex;
    flex-direction: column;
    padding-bottom: 40px;
    background: #ffffff;
  }
  .OverviewDiv {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .overviewText {
    width: 81px;
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
    margin-left: 20px;
    width: 170px;
    padding-left: 60px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background: #55a630;
    justify-content: start;
    align-items: center;
  }
  .schoolText {
    width: 70px;
    height: 22px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 22px;
    /* identical to box height */

    color: #ffffff;
    margin-left: 15px;
  }
  .schoolImageDiv {
    height: 24px;
    width: 24px;
    left: 0px;
    top: 0px;
    border-radius: 0px;
  }
  /* .OverviewDiv:hover {
    background: #55a630;
  } */

  .sideAndBodyDiv {
    width: 100%;
  }
  .profileBodyDiv {
    width: 1200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .sideAndBodyDiv {
    height: 725px;
    padding: 0px;
    display: flex;
  }
  .teacherProfileDiv {
    width: 709px;
    height: 612px;
    left: 0px;
    top: 0px;
    background: #ffffff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }
  .teacherProfileDiv2 {
    height: 526px;
    padding-left: 40px;
    padding-right: 40px;
    display: flex;
    flex-direction: column;
    left: 0px;
    top: 0px;
    background: #ffffff;
  }
  .teacherTopDiv {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    justify-content: end;
    align-items: center;
    margin-bottom: 10px;
    border-bottom: 1px;
    box-shadow: 0px 10px 10px -15px #111;
  }
  .topDivText {
    width: 120px;
    height: 17px;
    margin-right: 200px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;

    /* identical to box height */

    color: #03435f;
  }
  .profileInnerBody1 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    margin-left: 8px;
  }
  .profileInnerBody2 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .innerImage {
    width: 118px;
    height: 118px;
    border-radius: 50%;
  }
  .firstText {
    width: 500px;
    height: 27px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    margin-bottom: 2px;
    line-height: 17px;
    /* identical to box height */

    color: #03435f;
    margin-left: 4px;
  }
  .secondText1 {
    margin-top: 2px;
    width: 500px;
    height: 40px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;

    /* identical to box height */

    color: #03435f;
    margin-bottom: 2px;
    margin-left: 4px;
  }
  .secondText2 {
    width: 250px;
    height: 40px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    margin-top: 1px;
    margin-left: 4px;

    /* identical to box height */

    color: #03435f;
  }
  .editButton {
    text-decoration: none;
    width: 27px;
    height: 17px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    color: #55a630;
    margin-top: -70px;
  }
  .bottomText {
    width: 90px;
    height: 17px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 17px;
    /* identical to box height */

    color: #c4c4c4;
  }
  .bottomAboutText {
    width: 100%;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #03435f;
  }
  .bottomAboutEmail {
    width: 100%;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    /* or 171% */
    color: #03435f;
    margin-top: 0px;
  }
  .button {
    background: #55a630;
    height: 52px;
    border: none;
    color: white;
    width: 100%;
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

    /* identical to box height */

    margin-left: 15px;
  }
  .cancelButton {
    /* margin-right: 10px;
    margin-left: 90px; */
    margin: 0px;
    margin-right: 50px;
    padding: 0px;
  }
  .detailsDiv {
    margin-left: 20px;
  }
`;

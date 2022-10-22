import styled from "styled-components";

export const StudentSignUpStyle = styled.div`
  background: #e5e5e5;
  position: relative;
  height: 850px;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  .outerDiv {
    width: 616px;
    height: 800px;
    display: flex;
    flex-direction: column;

  }
  .topText {
    width: 204px;
    height: 22px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */

    color: #21334f;
  }

  .formDiv {
    margin-top: -150px;
    display: flex;
    flex-direction: column;
    /* align-items: flex-start; */
    padding: 32px 70px;
    gap: 32px;
    position: absolute;
    width: 745px;
    box-sizing: border-box;
    height: 750px;
    left: 412px;
    top: 253px;
    background: #ffffff;
    border: 1px solid #c4c4c4;
  }
  .firstFormText {
    width: 212px;
    height: 17px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    color: #21334f;
  }
  .secondFormText {
    width: 291px;
    height: 17px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    color: #bdbdbd;
  }
  .secondTopDiv {
    height: 800px;
    display: flex;
    flex-direction: column;
  }
  .formText {
    width: 200px;
    height: 17px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */
    margin: 2px;
    padding: 2px;
    color: #21334f;
  }
  .nameInput {
    box-sizing: border-box;

    padding-bottom: 5px;
    padding-right: 0px;
    margin-right: 0px;
    padding-left: 15px;
    margin-bottom: 9px;
    width: 100%;
    height: 40px;
    left: 0px;
    top: 0px;
    color: black;
    background: #ffffff;
    border: 1px solid #bdbdbd;
  }
  input[type="text"] {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    color: #21334f;
  }
  input[type="Password"] {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    color: #21334f;
  }
  input[type="Number"] {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    color: #21334f;
  }
  input[type="email"] {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    color: #21334f;
  }
  .placeHolder {
    font-family: "Inter";
    font-style: normal;
    /* identical to box height */

    color: #bdbdbd;
  }
  .uploadInput {
    padding-top: 12px;
    padding-bottom: 32px;
    box-sizing: border-box;
    padding-right: 0px;
    margin-right: 0px;
    padding-left: 15px;
    margin-bottom: 0px;
    width: 100%;
    height: 200px;
    left: 0px;
    top: 0px;
    background: #ffffff;
    border: 1px solid #bdbdbd;
  }
  .submitButton {
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    margin-top: 10px;
    border-radius: 5px 5px;
    margin-bottom: 15px;
    left: 0px;
    top: 0px;
    padding: 10px;
    border: none;
    background: #55a630;
    color: white;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 30px;
    /* identical to box height */

    color: #ffffff;
  }
  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .googlebutton{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
  }
  .submitButton:hover{
    background-color: green;
  }
`;

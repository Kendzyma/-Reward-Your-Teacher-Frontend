import styled from "styled-components";

export const StudentLoginStyle = styled.div`
  background: #e5e5e5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 850px;
  .topDiv {
    display: flex;
  }
  .bottomDiv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 80px;
    gap: 40px;

    width: 545px;
    height: 441px;

    background: #ffffff;
  }
  .textDiv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 490px;
  }
  .LoginText {
    width: 206px;
    height: 22px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #21334f;
  }
  .LoginText2 {
    width: 105px;
    height: 15px;
    padding-left: -20px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 15px;
    margin-bottom: 3px;
    /* identical to box height */

    color: #21334f;
  }
  .firstInput {
    width: 100%;
    flex-direction: row;
    align-items: center;
    padding-right: 0px;
    padding-top: 8px;
    padding-left: 10px;
    padding-bottom: 8px;
    color: #21334f;
    font-size: 17px;
    height: 28px;
    background: #ffffff;
    border: 1px solid #d9d9d9;
  }
  .submitButton {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    gap: 10px;
    border: none;
    margin-top: 17px;
    width: 500px;
    height: 48px;
    color: white;
    background: #55a630;
    border-radius: 5px 5px;
  }
  .line {
    justify-content: space-evenly;
    display: flex;
    width: 220px;
    height: 0px;
    border: 1px solid #d9d9d9;
  }
  .lineDiv {
    width: 100%;
    padding: 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .lineText {
    width: 10px;
    height: 15px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    margin-right: 0px;
    /* identical to box height */

    color: #21334f;
  }
  .googleDiv {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 48px;
    background: #ffffff;
    border-radius: 5px 5px;
    padding: 8px 16px;
  }
  .googleText {
    width: 120px;
    height: 15px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    margin-left: 10px;
  }
  .googleImg {
    width: 24px;
    height: 24.56px;
  }
  .loginTextDiv {
    width: 100%;
  }
  .LoginText2Div {
    width: 100%;
    margin-bottom: 3px;
  }
  .Account {
    margin-top: 20px;
  }
  .accountText {
    width: 230px;
    height: 15px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #21334f;
  }
  .createAccountSpan {
    width: 228px;
    height: 15px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 800;
    margin-left: 5px;
    font-size: 12px;
    line-height: 15px;
    color: #80b918;
    text-decoration: none;
  }
  .signUpLink {
    text-decoration: none;
  }
  .googleButton {
    width: 600px;
    padding: 40px;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .googleDiv {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    width: 100%;
    height: 48px;
    background: #ffffff;
  }
  @media only screen and (max-width: 450px) {
    .bottomDiv {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 80px;
      gap: 40px;

      width: 206px;
      height: 441px;

      background: #ffffff;
    }
    .loginTextDiv {
      width: 30%;
    }
    .firstInput {
      width: 68%;
      flex-direction: row;
      align-items: center;
      padding-top: 8px;
      height: 28px;

      padding-top: 8px;
      padding-left: 10px;
      padding-bottom: 8px;
      color: #21334f;
      background: #ffffff;
      border: 1px solid #d9d9d9;
    }
    .LoginText2 {
      width: 300px;
      height: 15px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      /* identical to box height */

      color: #21334f;
    }
    .LoginText2Div {
      width: 60%;
    }
    .submitButton {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 8px 16px;
      gap: 10px;
      border: none;
      width: 70%;
      height: 48px;
      color: white;
      background: #55a630;
    }
    .lineDiv {
      width: 60%;
      padding: 0px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .googleDiv {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 48px;
      background: #ffffff;
      border: 2px solid black;
    }
    .googleButton {
      width: 330px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
import styled from "styled-components";

export const TeacherWalletStyle = styled.div`

  .sideAndBodyDiv {
    width: 100%;
  }
  .WalletBodydiv {
    margin-top: -750px;
    width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 220px;
  }
  .sideAndBodyDiv {
    height: 725px;
    padding: 0px;
    display: flex;
  }
  .topWalletTextDiv {
    margin-left: 250px;
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
  }

  .teacherTransactionDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .innerTrans {
    display: flex;
  }

  .trans {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .description {
    width: 700px;
    height: 17px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 530;
    font-size: 20px;
    line-height: 17px;

    color: #03435f;
  }

  .date {
    width: 300px;
    height: 17px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;

    color: #c4c4c4;
  }

  .viewStudent {
    width: 87px;
    height: 17px;
cursor: pointer;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;

    color: #55a630;
  }
`;

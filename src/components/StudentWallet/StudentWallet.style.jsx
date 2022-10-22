import styled from "styled-components";

export const StudentWalletStyle = styled.div`
  

  .sideAndBodyDiv {
    width: 100%;
  }
  .WalletBodydiv {
    margin-top: -730px;
    margin-left: 190px;
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
    margin-left: 71px;
    /* identical to box height */

    color: #03435f;
  }
  .topWalletDiv {
    display: flex;
    justify-content: space-between;
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
    padding-left: 0px;
  }
  .walletDiv {
    display: flex;
    width: 100px;
    flex-direction: column;
    justify-content: center;
    
    justify-content: space-around;
    background-image: url("src/components/HomePage/images/background.png");
  }


  .text {
    background-image: linear-gradient(to right, #ffffff, #8ee89f);

    width: 100px;
  }
  .walletText {
    width: 160px;
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
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;
    width: 120px;
    padding: 0px;
    margin-left: 310px;
    background: white;
    border-radius: 10px 10px;
    padding-left: 13px;
    margin-top: -120px;
  }
  .ActiveText {
    width: 120px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    /* identical to box height */
    margin-left: 10px;
    color: #55a630;

    margin-left: auto;
    border-radius: 20px;
  }




  .addMoneyButton {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 16px;
    gap: 14px;
    width: 214px;
    height: 40px;
    left: 80px;
    top: 123px;
    color: white;
    background: #55a630;
    border: none;
  }
  .backgroundImage {
    width: 100%;
    padding: 0px;
    margin: 0px;
  }
  .totalMoneySentDiv {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .totalMoneySent {
    width: 340px;
  }
  .totalMoneySent2 {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    padding-left: 30px;
    padding-right: 30px;
  }
  .total1 {
    width: 335px;
    height: 39px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 19px;
    color: #03435f;
  }
  .total2 {
    width: 239px;
    height: 39px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 39px;
    /* identical to box height */

    color: #03435f;
  }
  .total3 {
    width: 27px;
    height: 15px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    /* identical to box height */
    background-color: white;
    color: #55a630;
  }


`;

import styled from 'styled-components';

export const HowItWorksStyles = styled.div`
  width: 1440px;
  height: 716px;
  left: 0px;
  top: 0px;
  padding-top: 10px;
  background: rgba(255, 242, 235, 0.6);
  .topDiv {
    margin-left: 170px;
  }
  .topTextDiv {
    margin-left: 60px;
  }
  .text1 {
    width: 253px;
    height: 48px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;

    color: #012a4a;
  }
  .text2 {
    width: 261px;
    height: 28px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: #012a4a;
  }
  .bottomDiv {
    display: flex;
    justify-content: space-around;
  }
  .image {
    margin-top: 120px;
    width: 383px;
    height: 265px;
  }
  .Confetti {
    position: absolute;
    top: 500px;
  }

  @media only screen and (max-width: 450px) {
    display: flex;
    flex-direction: column;
    width: 400px;

    .bottomDiv {
      display: flex;
      flex-direction: column;
    }
    .Confetti {
      display: none;
    }
    .text1 {
      width: 253px;
      height: 48px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 48px;
      margin-left: 20px;
      color: #03435f;
margin-left: 100px;
      color: #012a4a;
    }
    .topDiv {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-left: 10px;
    }
    .image {
      display: none;
    }
  }
`;
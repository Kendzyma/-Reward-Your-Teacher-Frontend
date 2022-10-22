import styled from 'styled-components'

export const TeachersRewardStyle = styled.div`
  width: 1440px;
  height: 600px;
  margin-top: 60px;
  left: 0px;
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-around;
  background: rgba(0, 0, 0, 0.03);
  .textDiv {
    width: 333px;
    height: 220px;
    left: 155px;
    top: 230px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 55px;
    /* or 196% */

    color: #03435f;
  }
  .firstText {
    width: 569px;
    height: 78px;
    left: 155px;
    top: 100px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 42px;
    line-height: 39px;

    color: #03435f;
  }
  .firstImage {
    position: absolute;
    top: 2100px;
    right: 450px;
  }

  .imageDiv {
    z-index: -1;
  }
  .firstSpan {
    position: absolute;
    width: 53px;
    height: 182px;
    left: 60px;
    top: 1788px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 150px;
    line-height: 182px;
    /* identical to box height */

    color: rgba(3, 67, 95, 0.1);

    transform: rotate(-180deg);
  }
  .secondSpan {
    position: absolute;
    width: 53px;
    height: 182px;
    left: 435px;
    top: 1750px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 150px;
    line-height: 182px;
    /* identical to box height */

    color: rgba(3, 67, 95, 0.1);

    transform: rotate(-360deg);
  }

  .Text {
    margin-bottom: 0px;
    margin-top: 0px;
  }
  .span {
    font-weight: 800;
    font-size: 30px;
  }
  @media only screen and (max-width: 450px) {
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    margin-top: 0px;
    height: 400px;
    padding-bottom: 0px;
    margin-top: 80px;
    .firstImage {
      display: none;
    }
    .secondImage {
      display: none;
    }
    .firstSpan {
      display: none;
    }
    .secondSpan {
      display: none;
    }
    .firstText {
      width: 400px;
    }
    .firstText {
      width: 369px;
      height: 78px;
      left: 155px;
      top: 100px;
      margin-top: -150px;
      margin-bottom: 60px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 39px;
      margin-left: 200px;

      color: #03435f;
    }
   .textDiv {
    width: 533px;
    top: 230px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 55px;
    margin-left: 200px;
    /* or 196% */

    color: #03435f;
  }
`;
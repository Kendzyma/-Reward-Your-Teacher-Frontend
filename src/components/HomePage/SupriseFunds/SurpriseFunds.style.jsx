import styled from 'styled-components'

export const SurpriseFundsStyle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  justify-content: center;
  width: 1440px;
  height: 444px;
  width: 1440px;
  height: 444px;
  left: 0px;
  top: 0px;
  background-image: linear-gradient(to right, #80b910, #5fbb70);
  .firstText {
    width: 450px;
    height: 96px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;

    color: #ffffff;
  }
  .secondText {
    width: 416px;
    height: 48px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* or 150% */

    color: #ffffff;
  }
  @media only screen and (max-width: 450px) {
    width: 400px;
    height: 350px;
  img {
    display: none;
  }
  .firstText {
    width: 290px;
    height: 96px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 25px;

    color: #ffffff;
  }
  .firstDiv {
    width: 390px;
    margin-top: -70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 300px;
  }
  .secondText {
    width: 216px;
    height: 48px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 60px;
    margin-top: 0px;
    /* or 150% */

    color: #ffffff;
  }
}
`;

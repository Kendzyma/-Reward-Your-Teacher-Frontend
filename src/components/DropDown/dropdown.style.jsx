import styled from "styled-components";

export const DropDownStyle = styled.div`
cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 216px;
  height: 230px;
  left: 1216px;
  top: 97px;
  box-sizing: border-box;
  position: absolute;
  background: #ffffff;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  .userDiv {
    display: flex;
    justify-content: start;

    align-items: center;
  }
  .userImageDiv {
    width: 20px;
    height: 20px;
    margin-left: 10px;
    margin-right: 10px;
  }
  .userText {
    width: 93px;
    height: 19px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #21334f;
  }
  @media only screen and (max-width: 450px) {
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 150px;
    height: 230px;
    left: 250px;
    top: 97px;
    box-sizing: border-box;
    position: absolute;
    background: #ffffff;
  }
`;
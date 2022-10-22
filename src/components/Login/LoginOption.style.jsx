import styled from "styled-components";

export const LoginOptionStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 700px;
  justify-content: space-around;

  .backgroundDiv {
    display: flex;
    flex-direction: column;
    height: 500px;
    background-color: white;
    width: 800px;
    justify-content: center;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: 0px 8px 35px -15px #111;
  }
  .button:hover {
    background-color: green;
  }
  @media only screen and (max-width: 450px) {
    .backgroundDiv {
      width: 380px;
      display: flex;
      flex-direction: column;
    }
  }
`;

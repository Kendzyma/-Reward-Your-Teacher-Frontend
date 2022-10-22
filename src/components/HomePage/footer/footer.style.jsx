import styled from 'styled-components'

export const Footerstyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1440px;
  height: 300px;
  text-decoration: none;
  color: white;
  background-color: black;

  .textDiv {
    text-decoration: none;
    color: white;
  }
  .firstDiv {
    margin-top: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-around;

    width: 200px;
  }
  .secondDiv {
    width: 400px;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-around;
  }
  .img {
    width: 39px;
    height: 39px;
  }
  .line {
    width: 1278px;
    height: 1px;
    background: #ffffff;
    opacity: 0.2;
  }
  .innerFooter {
    display: flex;
  }
  .social {
    width: 200px;
    margin: auto;
    display: flex;
    margin-right: 0px;
    justify-content: end;
    align-items: center;
    justify-content: space-around;
  }

  @media only screen and (max-width: 450px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 300px;
    text-decoration: none;
    color: white;
    background-color: black;
  }
  .firstDiv{
          margin-top: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-around;
  }
`;
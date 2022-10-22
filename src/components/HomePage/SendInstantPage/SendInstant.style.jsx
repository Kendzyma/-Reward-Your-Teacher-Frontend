import styled from 'styled-components';

export const SendInstantStyle = styled.div`
  display: flex;

  .textDiv {
    color: linear-gradient(104.55deg, #80b918 31.79%, #55a630 64.96%);
  }
  .imageDiv {
    background: rgba(0, 0, 0, 0.03);
    color: linear-gradient(104.55deg, #80b918 31.79%, #55a630 64.96%);
  }
  .text1 {
    width: 40%;
    margin-bottom: 0px;
    text-align: left;
    padding-right: 0px;
    background: linear-gradient(104.55deg, #80b918 31.79%, #55a630 64.96%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    font-weight: 700;
    font-size: 40px;
  }
  .divText1 {
    display: grid;
    place-items: center;
    text-align: center;
    
  }
  .divText2 {
    display: grid;
    place-items: center;

    text-align: center;
  }
  .text2 {
    width: 40%;
    text-align: left;
    padding-right: 0px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;

    color: #03435f;
  }
  .button {
    text-align: left;
    padding-right: 0px;

    display: grid;
    place-items: center;
  }
  .button2 {
    width: 40%;
    margin-left: 50px;
  }
  @media only screen and (max-width: 450px) {
    display: flex;
    flex-direction: column;
    height: 180px;
  .imageDiv {
    background: rgba(0, 0, 0, 0.03);
    color: linear-gradient(104.55deg, #80b918 31.79%, #55a630 64.96%);
  }
  .image {
    padding: 5px;
    width: 200px;
  }
  .textDiv {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0%;
  }
  .text1 {
    width: 60%;
    text-align: left;
    padding-right: 0px;
    background: linear-gradient(104.55deg, #80b918 31.79%, #55a630 64.96%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    font-weight: 500;
    font-size: 20px;
    
  }
  .divText2 {
    width: 100%;
    text-align: center;
  }
  .text2 {
    width: 80%;
    text-align: left;
    padding-right: 0px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;

    color: #03435f;
  }
  .imageDiv{
       display: none;
  }
  .button2{
width: 60%;
margin-left: 100px;
  }
}
`;
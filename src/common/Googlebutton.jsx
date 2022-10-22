
import React from 'react'
import styled from 'styled-components';
import google from '../components/HomePage/images/Google.png'
export default function Googlebutton(props) {
    const{width} = props;
  return (
      <GooglebuttonStyle>
   <button className="googleDiv" style={{width:width}}>
  <img src={google} alt="" className="googleimg" />
  <p className="googleText">Sign Up with Google</p>
</button>
</GooglebuttonStyle>
  )
}

export const GooglebuttonStyle = styled.div`
  .googleDiv {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 48px;
    background: #ffffff;
    border: 1px solid #d9d9d9;
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
  
`;




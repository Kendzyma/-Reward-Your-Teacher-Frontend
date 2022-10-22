import React from 'react'
import { SurpriseFundsStyle } from './SurpriseFunds.style'
import SurpriseImage from '../images/surprise.png'
import { Buttons } from '../../../common/buttons'
export default function SurpriseFunds() {
  return (
    <SurpriseFundsStyle>
      <div className="firstDiv">
        <p className="firstText">Send surprise funds to your teacher today</p>
        <p className="secondText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eget
          ipsum, sed praesent.
        </p>
        <Buttons
          text="Get Started"
          width="50%"
          background="#FFFFFF"
          color="#80B918"
          url = "/login"
        />
      </div>
      <div className="secondDiv">
        <img src={SurpriseImage}></img>
      </div>
    </SurpriseFundsStyle>
  );
}

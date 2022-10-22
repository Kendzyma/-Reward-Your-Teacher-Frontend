import React from 'react'
import { Buttons } from '../../../common/buttons'
import image from '../images/sendReward1.png'
import { SendInstantStyle } from './SendInstant.style'
import Confetti from '../images/Confetti.png'
import { useNavigate } from 'react-router-dom'

export default function Sendinstantpage() {
  const navigate= useNavigate();
const nav = () => {
  navigate("/login")
}
  return (
    <SendInstantStyle>
      <div className="textDiv">
        <div className="divText1">
          <h2 className="text1">
            Send instant <img src={Confetti} alt="party" className='party'/> heartfelt rewards to
            your teachers
          </h2>
        </div>
        <div className="divText2">
          <h5 className="text2">
            A digital platform that digitizes the process of sending funds to
            teachers who have done their work with emphatic kindness.
          </h5>
        </div>
        <div className="button">
          <div className="button2">
            <Buttons
              text="Get Started"
              width="50%"
              background="#80B918"
              color="white"
              url = "/login"        
            />
          </div>
        </div>
      </div>
      <div className="imageDiv">
        <img src={image} className="image"/>
      </div>
    </SendInstantStyle>
  );
}

import React from 'react'
import { Buttons } from '../../common/buttons';
import RewardYourTeacherIcon from '../../common/RewardYourTeacherIcon';
import Navbar from '../HomePage/navbar/navbar';
import { LoginOptionStyle } from './LoginOption.style'

export default function LoginOption() {
  return (
    <div>
      <Navbar />
      <LoginOptionStyle>
        <div className='backgroundDiv'>
          <Buttons
            text="Login As A Teacher"
            background="#80B918"
            color="white"
            url="/teacher/login"
            width="300px"
            height="70px"
          />
          <Buttons
            text="Login As A Student"
            background="#80B918"
            color="white"
            url="/student/login"
            width="300px"
            height="70px"
          />
        </div>
      </LoginOptionStyle>
    </div>
  );
}

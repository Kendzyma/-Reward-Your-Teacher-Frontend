
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import image from '../components/HomePage/images/Frame.png'
export default function RewardYourTeacherIcon() {
  return (
<LogoStyle className='logo'>
             <Link to = '/'><img src={image} alt=""/></Link>
            <h4 className="logoItem">Reward Your Teacher</h4>
        </LogoStyle>
  )
}
export const LogoStyle =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    .logoItem{
        margin-left: 20px;
        width: 246px;
height: 29px;

font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 29px;
color: #55A630;

    }
`

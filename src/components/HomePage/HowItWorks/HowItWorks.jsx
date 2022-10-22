import React from 'react'
import { HowItWorksStyles } from './HowItWorks.style'
import holdinggoldchest from '../images/holdinggoldchest.png'
import { LineIcon } from '../../../common/LineIcon'
import Confetti from '../images/Confetti2.png'

export default function HowItWorks() {
  return (
 <HowItWorksStyles>
   <img src={Confetti} alt="" className='Confetti' />
     <div className="topDiv">
         <p className='text1'>How it works</p>
         <p className='text2'>The easiest way to show you care.</p>
    </div>
     <div className="bottomDiv">
         <div >
        <LineIcon firstText = 'STEP ONE' secondText = 'Sign in/ Sign up' 
        thirdText = 'Do this with your email and password or Google account to get started.'/>
           <LineIcon  firstText = 'STEP TWO'  secondText = 'Fund your Wallet as an Alumni' thirdText = 'Move money from your bank account into your RewardyourTeacher Wallet and instantly begin to gift your teachers.'/>
              <LineIcon  firstText = 'STEP THREE' secondText = 'Send Monetary Reward to a Teacher' thirdText = 'Do it once, do it again and again! Let your teachers know that they are valued.'/>
         </div>
         <div>
        <img src={holdinggoldchest} alt="goldchest" className='image'/>
        </div>
     </div>
 </HowItWorksStyles>
  )
}

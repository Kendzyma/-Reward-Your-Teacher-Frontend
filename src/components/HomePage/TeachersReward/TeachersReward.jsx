import React from 'react'
import { TeachersRewardStyle } from './TeachersReward.styles'
import Union from '../images/Union.png'
import Union1 from '../images/Union1.png'


export default function TeachersReward() {
  return (
    <TeachersRewardStyle>
     <div>
       <p className="firstText">
      <p className='firstSpan'>,,</p>The teacher's reward should no longer be in heaven.<p className='secondSpan'>,,</p>
       </p>
       <div className='textDiv'>
       <p className='Text'>
         The teacher <span className='span'>motivate</span>
       </p>
       <p className='Text'>The teacher <span className='span'>inspires</span></p>
       <p className='Text'>The teacher <span className='span'>equips</span></p>
         <p className='Text'>The teacher <span className='span'>loves</span></p>
       </div>
     </div>
     <div className='imageDiv'>
       <img src={Union} className='firstImage'/>
       <img src={Union1} className='secondImage'/>
     </div>
    </TeachersRewardStyle> 
  )
}

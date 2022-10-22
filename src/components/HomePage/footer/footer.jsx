import React from 'react'
import { Footerstyle } from './footer.style'
import reward from '../images/reward.png'
import Navbutton from '../../../common/navbutton'
import instagram from '../images/instagram.png'
import twitter from '../images/twitter.png'
import youtube from '../images/youtube.png'
export const Footer = () => {
  return (
    <Footerstyle>
        <div className='firstDiv'>
            <img src={reward} alt="" className='img' />
             <p>
     RewardTeacher
            </p>
        </div>
        <div className='secondDiv'>
        {
            Navbutton.map((nav)=>{
                const{id,value,url} = nav;
                return(
                    <div key={id} className="textDiv">
                        <a href={url} className="textDiv">{value}</a>
                    </div>         
                )
            })
        }
        </div>
        <div>
            <p className='line'>_</p>
            <div className='innerFooter'>
            <span></span>
            <p>© 2022 Reward Teacher. All rights reserved</p>

          
            <div className='social'>
                <img src={instagram} alt="" />
                  <img src={twitter} alt="" />
                    <img src={youtube} alt="" />
            </div>
              </div>
        </div>

    </Footerstyle>

  )
}

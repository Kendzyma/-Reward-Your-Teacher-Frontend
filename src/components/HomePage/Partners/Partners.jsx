import React from 'react'
import { PartnerStyle } from './Partners.style'
import abeg from '../images/Vector.png'
import access from '../images/access.png'
import bolt from '../images/bolt.png'
import firstbank from  '../images/first_bank.png'
import airtel from '../images/airtel.png'
export default function Partners() {
  return (
    <PartnerStyle>
        <div className='firstDiv'>
            <p>Our Partners</p>
        </div>
        <div className='secondDiv'>
        <img src={abeg} className="img1" alt="" />
          <img src={access} alt=""  className="img2" />
            <img src={bolt} alt=""  className="img3" />
              <img src={firstbank} alt="" className="img4"  />
                <img src={airtel} alt="" className="img5"  />
        </div> 
    </PartnerStyle>
  )
}

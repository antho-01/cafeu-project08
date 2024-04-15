import React from 'react'
import style from "@/components/section3/page.module.css"

import { FaLocationArrow } from "react-icons/fa6";

export default function Section3() {
  return (
    <div className={style.section3Container}>

      <div className={style.section3TextContainer}>
           <div className={style.text}>
                  <h2>Stay Informed About Special Offers</h2>
                  <span>For Exclusive Deals, Coupons, News and More!</span>
           </div>
           <div className={style.inputter}>
                  <input type="email" className={style.input} placeholder='Enter your Email' />
                  <span>
                        <FaLocationArrow 
                              className={style.icon}
                        />
                  </span>
           </div>
      </div>
   
    </div>
  )
}

"use client"
import React, { useState } from 'react'
import styles from "@/components/navigation/page.module.css"
import Image from 'next/image'
import Link from 'next/link'
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaFaceSmile } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { AiTwotoneMail } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { IoBasketballOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";



export default function NavigationBar() { 

      const [hide, setHide] = useState(true);

      // method that show navigation bar.
      function showNavigationBar() {
            setHide(false)
      }

      // method that hide navigation bar.
      function hideNavigationBar() {
            setHide(true)
      }


      //drop switch1
      const [hides, setHides] = useState(true);

      // show minus
      function showMinus() {
            setHides((prev) => !prev)
      }


      //drop switch2
      const [hides2, setHides2] = useState(true);

      // show minus
      function showMinus2() {
            setHides2((prev) => !prev)
      }


      //drop switch3
      const [hides3, setHides3] = useState(true);

      // show minus
      function showMinus3() {
            setHides3((prev) => !prev)
      }

      //drop switch4
      const [hides4, setHides4] = useState(true);

      // show minus
      function showMinus4() {
            setHides4((prev) => !prev)
      }


      //drop switch5
      const [hides5, setHides5] = useState(true);

      // show minus
      function showMinus5() {
            setHides5((prev) => !prev)
      }


      //drop switch6
      const [hides6, setHides6] = useState(true);

      // show minus
      function showMinus6() {
            setHides6((prev) => !prev)
      }



  return (
    <header className={styles.header}>
      <nav className={styles.navigation}  id="navigationBar">

            <div className={styles.imageContainer}>
                  <Image 
                        src="/cafeuImage/loogo.png" 
                        fill={true}
                  />
            </div>

            <div className={styles.dropDowns}>

                  <div className={styles.drop}>
                              <span className={styles.dropDownButton}>Home <IoIosArrowDown className={styles.icon}/> </span>
                              <ul className={styles.list}>
                                    <li className={`${styles.items}`} id="active">home1</li>
                                    <li className={styles.items}>home2</li>
                                    <li className={styles.items}>home3</li>
                                    <li className={styles.items}>home4</li>
                                    <li className={styles.items}>home5</li>
                                    <li className={styles.items}>home6</li>
                                    <li className={styles.items}>home7</li>
                              </ul>
                  </div>

                  <div className={styles.drop}>
                              <span className={styles.dropDownButton}>About<IoIosArrowDown className={styles.icon}/> </span>
                              <ul className={styles.list}>
                                    <li className={`${styles.items}`} id={styles.active}>home1</li>
                                    <li className={styles.items}>About</li>
                                    <li className={styles.items}>About two</li>
                                    
                              </ul>
                  </div>

                  <div className={styles.drop}>
                              <span className={styles.dropDownButton}> Menu<IoIosArrowDown className={styles.icon}/> </span>
                              <ul className={styles.list}>
                                    <li className={`${styles.items}`} id={styles.active}>Menu</li>
                                    <li className={styles.items}>menu two</li>

                                    
                              </ul>
                  </div>

                  <div className={styles.drop}>
                              <span className={styles.dropDownButton}>Blog<IoIosArrowDown className={styles.icon}/> </span>
                              <ul className={styles.list}>
                                    <li className={`${styles.items}`} id={styles.active}>Blog</li>
                                    <li className={styles.items}>Blog Grid</li>
                                    <li className={styles.items}>Blog Details</li>
                                   
                              </ul>
                  </div>

                  <div className={styles.drop}>
                              <span className={styles.dropDownButton}>Pages<IoIosArrowDown className={styles.icon}/> </span>
                              <ul className={styles.list}>
                                    <li className={`${styles.items}`} id={styles.active}>FSQ</li>
                                    <li className={styles.items}>Gallery</li>
                                    <li className={styles.items}>Service</li>
                                    <li className={styles.items}>Service Details</li>
                                    <li className={styles.items}>Gallery Details</li>
                                    <li className={styles.items}>Team</li>
                                    <li className={styles.items}>Team Details</li>
                                    <li className={styles.items}>Pricing</li>
                                    <li className={styles.items}>Shop</li>
                                    <li className={styles.items}>Shop Details</li>
                                    <li className={styles.items}>Cart</li>
                              </ul>
                  </div>

                  <div className={styles.drop}>
                              <span className={styles.dropDownButton}>Contact<IoIosArrowDown className={styles.icon}/> </span>
                              <ul className={styles.list}>
                                    <li className={`${styles.items}`} id={styles.active}>Contact</li>
                                    <li className={styles.items}>Contact two</li>
                                    
                              </ul>
                  </div>

            
                              <CiSearch className={styles.search}/>
                              <div className={styles.imgContain}>
                                    <Image 
                                          src={"/cafeuImage/call.png"}
                                          width={30}
                                          height={30}
                                    />
                              </div>
                              <span className={styles.number}>+2349071599443</span>

            </div>

            
 
            <div className={styles.hamburger} onClick={showNavigationBar} >
                  <div className={styles.burger1}></div>
                  <div className={styles.burger2}></div>
                  <div className={styles.burger3}></div>
            </div>


            {/* for small screen */}
            
            <div className={ hide ? styles.sNav : styles.sNavShow}>
                        
                        <div className={styles.sNavToggle}>

                              <div className={styles.imageContainerSNav}>
                                    <Image 
                                          src="/cafeuImage/loogo.png" 
                                          fill={true}
                                    />
                              </div>

                              <span className={styles.exit} >
                                    <span className={styles.x} onClick={hideNavigationBar}> <RxCross2/> </span>
                              </span>

                        </div>

                        <div className={styles.sDDContainer}>

                              <div className={styles.drop1}>
                                    <p className={styles.drop1Button}>
                                           <span className={styles.drop1Text}>Home</span> 
                                           
                                          <span className={styles.drop1Switch} onClick={showMinus}>
                                                { hides ?
                                                <span className={styles.drop1Plus}>+</span>:
                                                <span className={styles.drop1Minus}>-</span>
                                                }
                                          </span>
                                    </p>

                                    <ul className={hides ? styles.drop1List : styles.drop1List1}>
                                          <li className={styles.drop1Items}>Home1</li>
                                          <li className={styles.drop1Items}>Home2</li>
                                         
                                    </ul>
                              </div>

                              {/* drop2 */}

                              <div className={styles.drop2}>
                                    <p className={styles.drop2Button}>
                                           <span className={styles.drop2Text}>About</span> 
                                           
                                          <span className={styles.drop2Switch} onClick={showMinus2}>
                                                { hides2 ?
                                                <span className={styles.drop2Plus}>+</span>:
                                                <span className={styles.drop2Minus}>-</span>
                                                }
                                          </span>
                                    </p>

                                    <ul className={hides2 ? styles.drop2List : styles.drop2List2}>
                                          <li className={styles.drop1Items}>about</li>
                                          <li className={styles.drop1Items}>about1</li>
                                          
                                    </ul>
                              </div>

                              {/* drop3 */}

                              <div className={styles.drop3}>
                                    <p className={styles.drop3Button}>
                                           <span className={styles.drop3Text}>Menu</span> 
                                           
                                          <span className={styles.drop3Switch} onClick={showMinus3}>
                                                { hides3 ?
                                                <span className={styles.drop3Plus}>+</span>:
                                                <span className={styles.drop3Minus}>-</span>
                                                }
                                          </span>
                                    </p>

                                    <ul className={hides3 ? styles.drop3List : styles.drop3List3}>
                                          <li className={styles.drop1Items}>Menu1</li>
                                          <li className={styles.drop1Items}>Menu2</li>
                                          
                                    </ul>
                              </div>

                              {/* drop4 */}

                              <div className={styles.drop4}>
                                    <p className={styles.drop4Button}>
                                           <span className={styles.drop4Text}>Blog</span> 
                                           
                                          <span className={styles.drop4Switch} onClick={showMinus4}>
                                                { hides4 ?
                                                <span className={styles.drop4Plus}>+</span>:
                                                <span className={styles.drop4Minus}>-</span>
                                                }
                                          </span>
                                    </p>

                                    <ul className={hides4 ? styles.drop4List : styles.drop4List4}>
                                          <li className={styles.drop1Items}>Blog Grid</li>
                                          <li className={styles.drop1Items}>Blog Details</li>
                                          
                                    </ul>
                              </div>

                              {/* drop5 */}

                              <div className={styles.drop5}>
                                    <p className={styles.drop5Button}>
                                           <span className={styles.drop5Text}>Pages</span> 
                                           
                                          <span className={styles.drop5Switch} onClick={showMinus5}>
                                                { hides5 ?
                                                <span className={styles.drop5Plus}>+</span>:
                                                <span className={styles.drop5Minus}>-</span>
                                                }
                                          </span>
                                    </p>

                                    <ul className={hides5 ? styles.drop5List : styles.drop5List5}>
                                          <li className={styles.drop1Items}>FSQ</li>
                                          <li className={styles.drop1Items}>Gallery</li>
                                          <li className={styles.drop1Items}>Service</li>
                                          <li className={styles.drop1Items}>Service Details</li>
                                          <li className={styles.drop1Items}>Gallery Details</li>
                                          <li className={styles.drop1Items}>Team</li>
                                          <li className={styles.drop1Items}>Team Details</li>
                                          <li className={styles.drop1Items}>Pricing</li>
                                          <li className={styles.drop1Items}>Shop</li>
                                          <li className={styles.drop1Items}>shop Details</li>
                                          <li className={styles.drop1Items}>Cart</li>
                                          
                                    </ul>
                              </div>

                              {/* drop 6 */}

                              <div className={styles.drop6}>
                                    <p className={styles.drop6Button}>
                                           <span className={styles.drop6Text}>Contact</span> 
                                           
                                          <span className={styles.drop6Switch} onClick={showMinus6}>
                                                { hides6 ?
                                                <span className={styles.drop6Plus}>+</span>:
                                                <span className={styles.drop6Minus}>-</span>
                                                }
                                          </span>
                                    </p>

                                    <ul className={hides6 ? styles.drop6List : styles.drop6List1}>
                                          <li className={styles.drop1Items}>Contact1</li>
                                          <li className={styles.drop1Items}>Contact2</li>
                                          
                                    </ul>
                              </div>

                        </div>

                        <div className={styles.property}>
                              <div className={styles.cart}><FaCartShopping className={styles.theCart}/><span className={styles.zero}><span className={styles.zeroIcon}>0</span></span></div>
                              <div className={styles.face}><FaFaceSmile className={styles.theFace}/></div>
                        </div>

                        <div className={styles.contactInformation1}>
                              <span className={styles.headingInformation1}> Contact Info </span>

                              <div className={styles.address}>

                                     <span className={styles.addressIconCon}> 
                                          <IoLocationOutline className={styles.addressIcon}/> 
                                     </span> 

                                     <span className={styles.street}>
                                           Port Harcourt, Rivers State
                                    </span>

                              </div>

                              <div className={styles.phone}>
                                     <span className={styles.phoneIconCon}>
                                          <FiPhone className={styles.phoneIcon}/>
                                    </span> 
                                    <span className={styles.phoneNumber}>
                                          09071599443
                                    </span>
                              </div>


                              <div className={styles.email}>

                                    <span className={styles.emailIconCon}>
                                          <AiTwotoneMail className={styles.emailIcon}/>
                                    </span> 
                                    <span className={styles.emailAddress}>
                                           anthodave01@gmail.com
                                    </span>
                                    
                              </div>

                              <div className={styles.socials}>
                                    <FaFacebookF className={styles.facebook}/>
                                    <IoLogoTwitter className={styles.twitter}/>
                                    <FaLinkedinIn className={styles.Linked}/>
                                    <IoBasketballOutline className={styles.basket}/>


                              </div>
                              <hr />
                        </div>

            </div>

                  
                  
                  



            

      </nav>
    </header>
  )
}

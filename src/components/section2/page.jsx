import React from 'react'
import styles from "@/components/section2/page.module.css"
import Image from 'next/image'
import { CgShapeRhombus } from "react-icons/cg";

// const List = (props) => {
//       const lists = [
//             {
//                   src: "/cafeuImage/card1.png",
//                   header: "100% Swiss Quality",
//                   text: "Lorem ipsum dol consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua",
//                   foot: "Discover More"
//             },

//             {
//                   src: "/cafeuImage/card4.png",
//                   header: "Organic Production",
//                   text: "Lorem ipsum dol consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua",
//                   foot: "Discover More"
//             },

            
//             {
//                   src: "/cafeuImage/card2.png",
//                   header: "Food Law Certified",
//                   text: "Lorem ipsum dol consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua",
//                   foot: "Discover More"
//             }, 

//             {
//                   src: "/cafeuImage/card3.png",
//                   header: "Food Production",
//                   text: "Lorem ipsum dol consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua",
//                   foot: "Discover More"
//             }

//       ]
//       return (

//             <div className={styles.surface}>
//                   <div className={styles.imgcontainer}>
//                         <Image
//                               src={props.src}
//                               width={115}
//                               height={115}
//                               className={styles.img}
//                         />
//                   </div>
//                   <h2 className={styles.h2}>{props.header}</h2>
//                   <p className={styles.text}>{props.text}</p>
//                   <p className={styles.footerText}>{props.foot}<CgShapeRhombus/></p>
//             </div>      
//       )     
// }

export default function Card() {
  return (
    <div className={styles.container}>

            <div className={styles.surface}>
                  <div className={styles.imgcontainer}>
                        <Image 
                              layout='fill'
                              alt='cardImg'
                              src={"/cafeuImage/card1.png"}
                              className={styles.img}
                        />

                  </div>
                  <h2 className={styles.h2}>100% Swiss Quality</h2>
                  <p className={styles.text}>Lorem ipsum dol consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua</p>
                  <p className={styles.footerText}><CgShapeRhombus/> Discover More <CgShapeRhombus/> </p>
            </div>

            <div className={styles.surface}>
                  <div className={styles.imgcontainer}>
                        <Image 
                              layout='fill'
                              alt='cardImg'
                              src={"/cafeuImage/card1.png"}
                              className={styles.img}
                        />

                  </div>
                  <h2 className={styles.h2}>100% Swiss Quality</h2>
                  <p className={styles.text}>Lorem ipsum dol consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua</p>
                  <p className={styles.footerText}><CgShapeRhombus/> Discover More <CgShapeRhombus/> </p>
            </div>

            <div className={styles.surface}>
                  <div className={styles.imgcontainer}>
                        <Image 
                              layout='fill'
                              alt='cardImg'
                              src={"/cafeuImage/card1.png"}
                              className={styles.img}
                        />

                  </div>
                  <h2 className={styles.h2}>100% Swiss Quality</h2>
                  <p className={styles.text}>Lorem ipsum dol consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua</p>
                  <p className={styles.footerText}><CgShapeRhombus/> Discover More <CgShapeRhombus/> </p>
            </div>

            <div className={styles.surface}>
                  <div className={styles.imgcontainer}>
                        <Image 
                              layout='fill'
                              alt='cardImg'
                              src={"/cafeuImage/card1.png"}
                              className={styles.img}
                        />

                  </div>
                  <h2 className={styles.h2}>100% Swiss Quality</h2>
                  <p className={styles.text}>Lorem ipsum dol consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua</p>
                  <p className={styles.footerText}><CgShapeRhombus/> Discover More <CgShapeRhombus/> </p>
            </div>

    </div>
  )
}
 
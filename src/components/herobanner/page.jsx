
import styles from "@/components/herobanner/page.module.css"
import Image from 'next/image'
import Button from "@/components/button/page";
import { BsFillCaretRightFill } from "react-icons/bs";

export default function HeroBanner() {
  return (
      <section className={styles.section1}>

            
                  
                  <div className={`${styles.herobanner}`}>
                  <div className={styles.heroText}>
                        <h1 className={styles.heroBannerH1}>
                              <span className={` ${styles.heroBannerH1Span1}  `}>Best in Cafeu</span>
                              <span className={styles.heroBannerH1Span2}>
                                    Different <span className={styles.spice}>
                                           <span className={styles.s}>S</span>p<span className={styles.i}>ice</span></span> for A
                              </span>
                              <span className={styles.heroBannerH1Span3}>
                                    Differnt taste
                              </span>
                              <span className={styles.heroBannerH1Span4}>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    Sed quod vel eligendi cum accusamus aperiam alias provident
                                     dolorem explicabo adipisci.
                              </span>
                        </h1>

                        <div className={styles.buttonSection}>
                              <Button
                                    title={"Order now"}
                              />

                              <span className={styles.heartBeat}> <BsFillCaretRightFill /> </span>
                              <p>Watch Now</p>
                        </div>
                  </div>

                  <div className={styles.heroImageContainer}>
                        <Image 
                              loading={"lazy"}
                              fill={true}
                              src={"/cafeuImage/first-slider.png"}
                              className={styles.heroImage}
                        />
                  </div>
            </div>
             
            <div className={styles.socials}>
                        <span className={styles.social_span}>facebook</span>
                        <span className={styles.social_span}>Twitter</span>
                        <span className={styles.social_span}>Instagram</span>
            </div>

      </section>  


  )
}


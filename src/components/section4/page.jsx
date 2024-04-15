import Image from 'next/image'
import React from 'react'
import styles from "@/components/section4/page.module.css"
import Button from '../button/page'

export default function Section4() {
  return (
    <section className={styles.section4}>
            <div className={styles.imgContainer}>
                  <Image 
                        src="/cafeuImage/exparience.png"
                        fill={true}
                        className={styles.img}
                  />
            </div>

            <div className={styles.textContainer}>
                  <span className={styles.about}>About us</span>
                  <h2 className={styles.h2}>Why We Are The Best</h2>
                  <span className={styles.text1}>Quis autem vel eum iure reprehenderit qui in evoluptate velit esse qua nihil</span>
                  <span className={styles.text2}>
                        molestiae consequatur, vel illum qui dolorem eum fugiat quvoluptas nulla
                        pariatureaque ipsa quae ab illo inventore veritatis et quasi architecto
                        beatae vitae dicta sunt explicabo.
                  </span>
                  <div className={styles.info1}>
                        <Image 
                              width={40}
                              height={50}
                              src="/cafeuImage/buffet.png"
                        />
                        <div className="info1TextCon">
                              <span className={styles.info1Text1}>Buffet Service</span>
                              <span className={styles.info1Text2}>
                                    Qariatureaque ipsa quae a illo inventore veritatis et quasi architecto
                              </span>
                        </div>

                  </div>

                  <div className={styles.info1}>
                        <Image 
                              width={40}
                              height={40}
                              src={"/cafeuImage/online.png"}
                        />
                        <div className={styles.info1TextCon}>
                              <span className={styles.info1Text1}>Book Online</span>
                              <span className={styles.info1Text2}>
                                    Qariatureaque ipsa quae a illo inventore veritatis et quasi architecto
                              </span>
                        </div>

                  </div>

                  <Button 
                        title={"About Us"}
                  />
            </div>

      </section>
  )
}

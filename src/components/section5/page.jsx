import Link from 'next/link'
import React from 'react'
import styles from "@/components/section5/page.module.css"
import Image from 'next/image'
import { CiPizza } from 'react-icons/ci'

export default function Section5() {
  return (
    <section className={styles.section5}>

            <div className={styles.header}>
                <span className={styles.heading}>Special Menu</span>
                <h2 className={styles.subHeading}>Our Specials Menu</h2>
            </div>

            <div className={styles.router}>
                <Link href={"/section5/all"}>
                      <div className={styles.all}>
                          <Image
                              width={100}
                              height={90}
                              src={"/cafeuImage/all.png"}
                          />
                          <span>All</span>
                      </div>
                </Link>

                <Link href={"/section5/pizza"}>
                       <div className={styles.all}>
                          <Image
                              width={100}
                              height={90}
                              src={"/cafeuImage/all.png"}
                          />
                          <span>All</span>
                      </div>

                </Link>
                <Link href={"/section5/asian"}>
                  
                      <div className={styles.all}>
                          <Image
                              width={100}
                              height={90}
                              src={"/cafeuImage/all.png"}
                          />
                          <span>All</span>
                      </div>

                </Link>
                <Link href={"/section5/burger"}>

                      <div className={styles.all}>
                          <Image
                              width={100}
                              height={90}
                              src={"/cafeuImage/all.png"}
                          />
                          <span>All</span>
                      </div>

                </Link>

                <Link href={"/section5/salad"}>

                      <div className={styles.all}>
                          <Image
                              width={100}
                              height={90}
                              src={"/cafeuImage/all.png"}
                          />
                          <span>All</span>
                      </div>

                </Link>
                <Link href={"/section5/bakery"}>

                      <div className={styles.all}>
                          <Image
                              width={100}
                              height={90}
                              src={"/cafeuImage/all.png"}
                          />
                          <span>All</span>
                      </div>

                </Link>
                <Link href={"/section5/drink"}>

                      <div className={styles.all}>
                          <Image
                              width={100}
                              height={90}
                              src={"/cafeuImage/all.png"}
                          />
                          <span>All</span>
                      </div>

                </Link>
            </div>
    </section>
  )  
}

// pizza 
// Asian 
// burger 
// salad 
// Bakery 
// Drinks 


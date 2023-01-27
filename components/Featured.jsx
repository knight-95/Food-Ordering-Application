import React from 'react'
import Image from 'next/image'
import styles from "../styles/Featured.module.css"

const Featured = () => {
  return (
    <div className={styles.container}>
    <Image scr="/img/arrow1.png" alt=""/>
    <div className={styles.wrappe}>

    </div>
    <Image scr="/img/arrowr.png" alt=""/>
    </div>
  );
}

export default Featured
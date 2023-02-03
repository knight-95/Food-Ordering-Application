import React from "react";
import Image from "next/image";
import styles from "../styles/Featured.module.css";

const Featured = () => {
  const images = [
    "/img/featured.png",
    "/img/featured2.png",
    "/img/featured3.png",
  ];

  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer}>
        <Image scr="/img/arrowl.png"  alt="" />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          {images.map((img, i) => (
            <Image src="/img/featured.png" fill key={i} alt="" />
          ))}
        </div>
      </div>
      <div className={styles.arrowContainer}>
        <Image scr="/img/arrowr.png" alt="" />
      </div>
    </div>
  );
};

export default Featured;

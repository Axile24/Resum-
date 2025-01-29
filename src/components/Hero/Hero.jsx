import React from 'react';
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';

export default function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}> Hi, I'm Nadjib</h1>
        <p className={styles.description}>I'm full stack developper with 5 
        years of experience using Java,  Java Entreprise,  JavaScript, 
        DevOps, Mysql, Postgressql, laravels React and Node Js.
        Reach out if you'd like more</p>
        <a href="mailto:amokrane.n@icloud.com" className={styles.contactBtn}>Contact me</a>
      </div>to
      <img src={getImageUrl('hero/heroImage.jpg')} alt='Hero image of me' className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />

    </section>
  )
}

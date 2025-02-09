import React from 'react';
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';

export default function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}> Hi, I'm Nadjib</h1>
        <p className={styles.description}>
        Jag har en bakgrund inom både medicinsk bilddiagnostik och IT. Jag är utbildad röntgensjuksköterska med erfarenhet av olika modaliteter och har även kompetens inom Java Enterprise, JavaScript och DevOps. Min kombination av medicinsk och teknisk expertis gör att jag kan bidra inom både radiologi och systemutveckling.
        </p>
        <a href="mailto:amokrane.n@icloud.com" className={styles.contactBtn}>Contact me</a>
      </div>to
      <img src={getImageUrl('hero/heroImage.jpg')} alt='Hero image of me' className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />

    </section>
  )
}

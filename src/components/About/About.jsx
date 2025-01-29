import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css"

export const About = () => {
  return (
        <section className={styles.container} id='about'>
         <h2 className={styles.title}> About</h2>
         <div className={styles.content}>

            <img src={getImageUrl("about/aboutImage.png")} alt='me stitting with laptop'className={styles.aboutImage}/>

            <ul className={styles.aboutItemes}>

                <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt='Cursor Icon'/>
                <div className={styles.aboutItemText}>
                    <h3>Frontend Developer</h3>
                    <p>I'm a frondend developer with experience in responsive and optimized sites</p>
                </div>
                
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt='Server Icon'/>
                <div className={styles.aboutItemText}>
                    <h3>Backend Developer</h3>
                    <p> I have an experince in developing fast and optimised backend systems and API's</p>
                </div>
                </li >

                <li className={styles.aboutItem}><img src={getImageUrl("about/cursorIcon.png")} alt='xray Icon'/>
                <div className={styles.aboutItemText}>
                    <h3>X- ray technologist</h3>
                    <p>I am an <b> X-ray Technologist</b>, a healthcare professional specializing in diagnostic imaging. I operate X-ray equipment to capture images of the body, helping doctors diagnose and treat medical conditions. My role involves ensuring patient safety, maintaining imaging equipment, and collaborating with healthcare teams to provide accurate results. I am passionate about delivering high-quality care and supporting patients through their medical journeys.</p>
                </div>
                
                </li>
            </ul>
         </div>

        </section>
  )
}

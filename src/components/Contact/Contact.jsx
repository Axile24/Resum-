import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Contact.module.css"

export  const Contact =()=> {
  return <footer id='contact' className={styles.container}>
    <div className='styles.text'><h2>Contact</h2><p> Free to reach out</p> </div>

    <ul className={styles.links}>
      <li className={styles.link}>
       <img src={ getImageUrl('Contact/emailIcon.png')}alt='Email Icon'/>
       <a href="mailto:amokrane.n@icloud.com">amokrane.n@icloud.com</a>
      </li>


      <li className={styles.link}>
       <img src={ getImageUrl('Contact/linkedinIcon.png')}alt='linked Icon'/>
       <a href="https://www.linkedin.com/myname">linkedin.com/myname</a>
      </li>

      <li className={styles.link}>
       <img src={ getImageUrl('Contact/githubIcon.png')}alt='github Icon'/>
       <a href="https://www.github.com/axile24">github.com/axile</a>
      </li>



    </ul>
    
     </footer>
}

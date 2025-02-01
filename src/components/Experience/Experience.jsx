import React from "react";
import Skills from "../../data/Skills.json";
import { getImageUrl } from "../../utils";
import history from "../../data/History.json";
import styles from "./Experience.module.css";

export default function Experience() {
  return (

    <section className={styles.container} id="experience">

      <h2 className={styles.title}>Experience</h2>

      <div className={styles.content}>

        {/* Skills Section */}
        <div className={styles.skills}>

          {Skills.map(({ imageSrc, title }, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.imageContainer}>
                <img src={getImageUrl(imageSrc)} alt={title} />
              </div>
  
            </div>
          ))}
        </div>

        {/* Experience History */}
        <ul className={styles.history}>
          {history.map(({ imageSrc, organisation, role, startDate, endDate, experiences }, id) => (
            <li key={id} className={styles.historyItem}>
              <img src={getImageUrl(imageSrc)} alt={`${organisation} Logo`} />
              <div className={styles.historyItemDetails}>
                <h3>{`${role}, ${organisation}`}</h3>
                <p>{`${startDate} - ${endDate}`}</p>
                <ul>
                  {experiences.map((experience, index) => (
                    <li key={index}>{experience}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

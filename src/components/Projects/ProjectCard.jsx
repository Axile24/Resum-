import React from 'react';
import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ project: { title, description, skills, demo, source, imageSrc } }) => {
  return (
    <div className={styles.container}>
      <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills} >
        {skills.map((skill, id) => (
          <li key={id}>{skill}</li>
        ))}
      </ul>
      <div className={styles.links}>
        <a  href={demo} className={styles.link} target="_blank" rel="noopener noreferrer">Demo</a>
        <a href={source}  className={styles.link}  target="_blank" rel="noopener noreferrer">Source</a>
      </div>
    </div>
  );
};

export default ProjectCard;

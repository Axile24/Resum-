import React from 'react';
import projectsData from "../../data/Projects.json"; // n
import ProjectCard from './ProjectCard';
import styles from "./Projects.module.css"

export const Projects = () => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projects}>
                {projectsData.map((project, id) => {
                    return <ProjectCard key={id} project={project} />;
                })}
            </div>
        </section>
    );
};


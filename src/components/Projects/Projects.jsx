import React from "react";

import styles from "./Projects.module.css";
import productReviewAnalyzer from "../../assets/projects/productReviewAnalyzer.png";
import pathForSwerve from "../../assets/projects/pathForSwerve.png";
import menuScraper from "../../assets/projects/menuScraping.png";

export const Projects = () => {
    return (
      <section className={styles.container} id="projects">
        <h2 className={styles.title}>Projects</h2>
        <ul className={styles.projects}>
            <li className={styles.project}>
                <h3 className={styles.projectTitle}>Product Review Analyzer</h3>
                <div className={styles.projectContent}>
                    <img className={styles.projectImage} src={productReviewAnalyzer} alt="Sample Amazon Product Reviews" />
                    <p className={styles.projectDescription}>
                        Currently developing a web application analyze and summarize reviews for products on various online marketplaces. Currently supports Amazon products, with more additions planned. 
                        This application is being developed with React, Python, LangChain, Beautiful Soup, and Ollama. Link will be added once ready for production. 
                    </p>
                </div>
            </li>
            <li className={styles.project}>
                <h3 className={styles.projectTitle}>Path for Swerve</h3>
                <div className={styles.projectContent}>
                    <img className={styles.projectImage} src={pathForSwerve} alt="Sample Path Planning Visualization" />
                    <p className={styles.projectDescription}>
                        Added functionality to support visualization of autonomous paths of holonomic &#40;omnidirectional&#41; drivebases to an in-house visualization application.
                        This application was developed using Java, JavaScript, HTML, and CSS. <a className="link" href="https://github.com/NirmalShiju/Cheesy-Path-for-Swerve">Link</a>
                    </p>
                </div>
            </li>
            <li className={styles.project}>
                <h3 className={styles.projectTitle}>Menu Scraper</h3>
                <div className={styles.projectContent}>
                    <img className={styles.projectImage} src={menuScraper} alt="Menu Scraper Code" />
                    <p className={styles.projectDescription}>
                        Developed a web application that scrapes current information about UMD dining hall menus and displays it in a user-friendly format. 
                        The application was developed using React, Python, and Beautiful Soup. Link will be added once ready for production. 
                    </p>
                </div>
            </li>
        </ul>
      </section>
    );
  };
import React from "react";

import styles from "./Contact.module.css";
import pdf from "../../assets/contact/resume.pdf";
import resumeIcon from "../../assets/contact/resumeIcon.png";
import emailIcon from "../../assets/contact/emailIcon.png";
import linkedinIcon from "../../assets/contact/linkedinIcon.png";
import githubIcon from "../../assets/contact/githubIcon.png";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <p>Please reach out to me anytime!</p>
        <li className={styles.link}>
          <img
            src={resumeIcon}
            alt="Resume icon"
          />
          <a className={styles.link} href={pdf} download="NirmalShijuResume.pdf">Download My Resume</a>
        </li>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="Email icon" />
          <a href="mailto:nirmal.shiju@gmail.com">nirmal.shiju@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={linkedinIcon}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/nirmalshiju/">linkedin.com/in/nirmalshiju</a>
        </li>
        <li className={styles.link}>
          <img src={githubIcon} alt="Github icon" />
          <a href="https://github.com/NirmalShiju">github.com/NirmalShiju</a>
        </li>
      </ul>
    </footer>
  );
};
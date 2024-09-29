import React from "react";

import styles from "./About.module.css";
import aboutImage from "../../assets/about/aboutImage.png";

export const About = () => {
    return (
      <section className={styles.container} id="about">
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.content}>
          <img
            src={aboutImage}
            alt="Me sitting with a laptop"
            className={styles.aboutImage}
          />
          <div className={styles.aboutItems}>
            <p> 
              &emsp;&emsp;  Since I was a child, one of my defining traits has always 
              been curiosity. My parents could never prevent me from 
              hurling a relentless barrage of questions at them or from 
              experimenting with the bottles under the sink that were 
              clearly labeled “do not mix.” I want to learn as much as 
              possible about the world and the people around me, and that 
              has defined my interests throughout my life. This drive led 
              me to wonder what I would be like had I grown up in a vastly 
              different environment, and resulted in me working with 
              Speaking Buddies, an organization that teaches English to 
              impoverished kids in India, throughout high school. My 
              conversations with my buddy helped me understand what life 
              would be like without many of the privileges I take for 
              granted. <br></br><br></br>
              
              &emsp;&emsp;  Another key trait of mine is that I try to maximize 
              every opportunity I get. From small tasks, such as an essay 
              or project, to larger goals such as my overall education and 
              passion for badminton, I never let myself slack off. This 
              attitude is something my parents taught me to value, and I 
              believe it has served me well. I learned how to play badminton 
              in my backyard from my grandparents, and ever since then, I am 
              proud of how I have improved by practicing and learning from 
              my opponents. Another example of this attitude was my research 
              internship on analyzing malware using large language models. 
              The project was eventually canceled due to a brand-new paper 
              covering what we intended to do, but I am proud of how my work 
              ethic and eagerness to learn resulted in the professor 
              supervising the internship to offer me another project to work 
              on with him.<br></br><br></br>
              
              &emsp;&emsp;  As I progress through college and prepare to begin a 
              professional career, I will continue to exemplify these values 
              through my life. I believe curiosity and my drive to capitalize 
              on the opportunities I get will help me become a capable and 
              informed software engineer.
            </p>
          </div>
        </div>
      </section>
    );
  };
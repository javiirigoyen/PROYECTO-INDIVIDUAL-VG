import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Landing.module.css';

const LandingPage = () => {
  return <div className={styles.image}>
     <h1 className= {styles.titulo}>VIDEOGAMES APP!</h1>
      <Link to="/home">
      <button className = {styles.boton}>HOME</button>
     </Link>
     <div className = {styles.linkedin}>
                <a className={styles.link} href="https://www.linkedin.com/in/javier-irigoyen-terre-full-stack/" target="_blank" rel="noreferrer">
                🙋‍♂️ if you want to be my friend on linkedin, click here! 🙋‍♂️
                </a>
            </div>
        </div>
        }

export default LandingPage
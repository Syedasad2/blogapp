import React from 'react'
import Styles from '../styles/about.module.css'

const About = () => {
  return (
    <div className={Styles.container}>
      <h1 className={Styles.heading}>About Coding Vibes Blog</h1>
      <p className={Styles.description}>
        Welcome to <strong>Coding Vibes</strong> — your daily dose of web development blogs, tutorials, and tech insights. 
        We aim to inspire, educate, and empower developers around the world.
      </p>

      <div className={Styles.section}>
        <h2>📖 What You’ll Find Here:</h2>
        <ul className={Styles.list}>
          <li>Latest web development trends</li>
          <li>Hands-on project tutorials</li>
          <li>JavaScript, React, and Node.js guides</li>
          <li>Freelancing tips for developers</li>
          <li>Exclusive coding challenges and problem-solving techniques</li>
        </ul>
      </div>

      <div className={Styles.section}>
        <h2>🚀 Our Mission</h2>
        <p className={Styles.paragraph}>
          At Coding Vibes, we believe in sharing knowledge and creating a collaborative learning environment for developers of all skill levels. 
          Our mission is to make coding accessible, enjoyable, and impactful for everyone.
        </p>
      </div>

      <div className={Styles.section}>
        <h2>📬 Stay Connected</h2>
        <p className={Styles.paragraph}>
          Got questions, ideas, or suggestions? We’d love to hear from you!
          <br />
          📧 <a href="mailto:codingvibesblog@gmail.com" className={Styles.link}>codingvibesblog@gmail.com</a>
        </p>
      </div>
    </div>
  )
}

export default About

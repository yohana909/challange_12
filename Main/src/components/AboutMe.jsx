import React from 'react';
import avatar from '../assets/images/avatar.jpg'; // your avatar image

function AboutMe() {
  return (
    <section id="about-me">
      <h2>About Me</h2>
      <img src={avatar} alt="Jane Doe" />
      <p>Hello, I'm Jane! I'm a web developer with a passion for building beautiful and functional web applications.</p>
    </section>
  );
}

export default AboutMe;

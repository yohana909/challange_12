import React from 'react';

function Resume() {
  return (
    <section id="resume">
      <h2>Resume</h2>
      <a href="/assets/resume.pdf" download>Download Resume</a>
      <h3>Skills</h3>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>CSS</li>
        <li>HTML</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>Git/GitHub</li>
        {/* Add more skills as needed */}
      </ul>
    </section>
  );
}

export default Resume;

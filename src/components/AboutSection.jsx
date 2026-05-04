import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="row">
          <div className="col-lg-10 mx-auto about-content">
            <p className="about-text">
              I am Somu Mahesh Kiran Babu, a fourth-year B.Tech student in Computer Science and Engineering (Artificial Intelligence & Machine Learning) at Mohan Babu University. I am an aspiring full-stack developer with hands-on experience in building web applications using React.js for the frontend and Spring Boot for the backend.
            </p>
            <p className="about-text">
              I have a strong foundation in data structures and algorithms, which helps me write efficient and optimized code. I regularly practice problem-solving to improve my logical thinking and coding skills.
            </p>
            <p className="about-text">
              I am familiar with modern development practices such as RESTful APIs, component-based architecture, and clean code principles. I am continuously learning and building projects to strengthen my technical skills.
            </p>
            <p className="about-text">
              I am passionate about solving real-world problems using technology and am currently seeking opportunities where I can apply my knowledge, gain practical experience, and grow as a software developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

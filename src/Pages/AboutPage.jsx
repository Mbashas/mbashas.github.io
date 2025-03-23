import React from 'react';
import Layout from '../Components/Layout';

const AboutPage = () => {
  return (
    <Layout>
      <section className="section" style={{ paddingTop: "120px" }}>
        <div className="container">
          <h1>About Me</h1>
          <p className="lead">I'm Seth Mbasha, a Computer Science student with a passion for embedded systems and machine learning</p>
          
          <div className="grid-2" style={{ marginTop: "3rem" }}>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
                alt="Seth Mbasha" 
                className="about-img"
              />
            </div>
            <div>
              <h2>My Journey</h2>
              <p>
                Born and raised in Uganda, I discovered my passion for technology at an early age. 
                I'm currently pursuing a degree in Computer Science, focusing on the intersection of 
                hardware and software systems.
              </p>
              <p>
                I draw inspiration from ancient African wisdom, particularly the Kongo civilization, 
                applying their principles of community and harmony to modern technology development. 
                I believe in the ancient Kongo philosophy of 'muntu' - we're connected to one another 
                through our shared humanity.
              </p>
              <p>
                This influences how I approach technology: not just as tools, but as bridges between 
                people and possibilities. Innovation thrives at the intersection of technical expertise 
                and visionary leadership, where ancient wisdom meets modern solutions.
              </p>
            </div>
          </div>
          
          <div className="kongo-divider"></div>
          
          <h2 className="text-center">Education & Experience</h2>
          <div className="grid-2" style={{ marginTop: "2rem" }}>
            <div className="card">
              <div className="card-body">
                <h3>Education</h3>
                <ul>
                  <li>BSc in Computer Science, Uganda Christian University (2019-2023)</li>
                  <li>Machine Learning Specialization, Coursera (2022)</li>
                  <li>Embedded Systems Certificate, Udacity (2021)</li>
                </ul>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3>Experience</h3>
                <ul>
                  <li>Software Engineering Intern, InnovateUg (2022)</li>
                  <li>Research Assistant, AI Lab Uganda (2021-2022)</li>
                  <li>Freelance Web Developer (2020-Present)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;

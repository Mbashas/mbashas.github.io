import React from 'react';
import Layout from '../Components/Layout';
import Home from '../Components/Home';
import About from '../Components/About';
import Portfolio from '../Components/Portfolio';
import Blog from '../Components/Blog';
import Contact from '../Components/Contact';

const HomePage = () => {
  const siteProps = {
    name: "Seth Mbasha",
    title: "Computer Science Student & Embedded Systems Enthusiast"
  };

  return (
    <Layout>
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Blog />
      <Contact />
    </Layout>
  );
};

export default HomePage;

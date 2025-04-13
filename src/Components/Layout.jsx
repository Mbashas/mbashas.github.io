import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const Layout = ({ children, isHomePage = true }) => {
  // Set up page transitions and global scroll animations
  useEffect(() => {
    // Smooth scrolling setup
    gsap.utils.toArray("section").forEach((section, i) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        toggleClass: {targets: section, className: "active"},
        onEnter: () => {
          if (section.id) {
            // Update URL hash without scrolling
            const scrollPosition = window.scrollY;
            window.location.hash = section.id;
            window.scrollTo(0, scrollPosition);
            
            // Update active state in navigation
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
              if (link.getAttribute('href') === `#${section.id}`) {
                link.classList.add('active');
              } else {
                link.classList.remove('active');
              }
            });
          }
        }
      });
    });
    
    // Add scroll progress indicator
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    
    gsap.to(progressBar, {
      width: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3
      }
    });
    
    return () => {
      // Clean up
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      if (progressBar && progressBar.parentNode) {
        progressBar.parentNode.removeChild(progressBar);
      }
    };
  }, []);

  return (
    <div className="site-wrapper">
      <Navbar isHomePage={isHomePage} />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

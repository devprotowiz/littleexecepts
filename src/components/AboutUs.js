import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Parallax } from 'react-parallax';
import '../styles/AboutUs.css';
import aboutImage from '../assets/images/aboutImage.png'; // Make sure to place your image here

const AboutUs = () => {
  const textAnimation = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 500 });
  const imageAnimation = useSpring({ transform: 'scale(1)', from: { transform: 'scale(0.9)' }, delay: 500 });

  return (
    <div className="about-us">
      <animated.div style={textAnimation} className="about-content">
        <h2>About us</h2>
        <p>
          Founded by Radha Thanigaivel, a former teacher and Certified IELTS trainer, Little Experts is dedicated to nurturing young minds and helping them excel in their academic endeavors. Established in 2021 with just two students, we have proudly coached over 200 students to date.
        </p>
      </animated.div>
      <Parallax bgImage={aboutImage} strength={300}>
        <animated.div style={imageAnimation} className="about-image">
          <img src={aboutImage} alt="About us illustration" />
        </animated.div>
      </Parallax>
    </div>
  );
};

export default AboutUs;

import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Parallax } from 'react-parallax';
import '../styles/Home.css';
import mainImage from '../assets/images/mainImage.png'; // Assuming you have the combined image in this path

const Home = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 500 });

  return (
    <Parallax bgImage={mainImage} strength={300}>
      <div className="home">
        <div className="content">
          <animated.div className="justify-text" style={props}>
            <h1>Transforming education into <span>playful adventures</span></h1>
            <p>at Little Experts, where we believe in transforming education and empowering every student to become a confident, knowledgeable, and skilled individual.</p>
          </animated.div>
        </div>
        <div className="image">
          <img src={mainImage} alt="Education illustration" />
        </div>
      </div>
    </Parallax>
  );
};

export default Home;

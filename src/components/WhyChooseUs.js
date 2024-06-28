import React from 'react';
import { useSpring, animated } from 'react-spring';
import '../styles/WhyChooseUs.css';
import phonicsImage from '../assets/images/phonics.png';
import handwritingImage from '../assets/images/handwriting.png';
import curriculumImage from '../assets/images/curriculum.png';

const WhyChooseUs = () => {
  const phonicsProps = useSpring({ opacity: 1, transform: 'translateX(0)', from: { opacity: 0, transform: 'translateX(-50px)' }, delay: 200 });
  const handwritingProps = useSpring({ opacity: 1, transform: 'translateX(0)', from: { opacity: 0, transform: 'translateX(50px)' }, delay: 400 });
  const curriculumProps = useSpring({ opacity: 1, transform: 'translateX(0)', from: { opacity: 0, transform: 'translateX(-50px)' }, delay: 600 });

  return (
    <div className="why-choose-us">
      <h2>Why Choose Us ?</h2>
      <div className="section">
        <animated.div style={phonicsProps} className="content">
          <img src={phonicsImage} alt="Phonics Activities" className="left-image" />
          <div className="text">
            <h3>Engaging and Fun Phonics Activities</h3>
            <p>We specialize in advanced phonics, drawing inspiration from the highly effective teaching strategies used in the USA. Our phonics activity center is meticulously designed to make learning engaging and fun for primary kids. By incorporating interactive and stimulating activities, we ensure that children build a strong foundation in reading and literacy, setting them up for long-term academic success.</p>
          </div>
        </animated.div>
      </div>
      <div className="section">
        <animated.div style={handwritingProps} className="content">
          <img src={handwritingImage} alt="Handwriting Skills" className="right-image" />
          <div className="text">
            <h3>Focus on Cursive Handwriting Skills</h3>
            <p>We place a strong emphasis on developing cursive handwriting skills, recognizing the crucial role it plays in enhancing both writing ability and overall cognitive development. Our tailored curriculum helps students of Kindergarten and Primary Level improve their handwriting, which in turn supports their learning across all subjects.</p>
          </div>
        </animated.div>
      </div>
      <div className="section">
        <animated.div style={curriculumProps} className="content">
          <img src={curriculumImage} alt="Curriculum" className="left-image" />
          <div className="text">
            <h3>Tailored Curriculum for Young Learners</h3>
            <p>Our curriculum is specially designed for young learners, focusing on fostering a love for learning. We believe that early education should be both fun and effective, helping each child achieve their highest potential. By creating a nurturing and supportive learning environment, we encourage students to explore their interests and develop their skills confidently.</p>
          </div>
        </animated.div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Courses.css';
import phonicsImage from '../assets/images/phonics.avif'; // Ensure the image path is correct
import tuitionImage from '../assets/images/tution.avif'; // Ensure the image path is correct

const Courses = () => {
  return (
    <div className="courses">
      <h2>Our Courses</h2>
      <div className="course">
        <div className="course-content">
          <img src={phonicsImage} alt="Phonics" />
          <div className="text">
            <h3>Phonics</h3>
            <p>Our Phonics course is designed to help young learners develop strong reading skills through engaging and interactive activities. By focusing on phonemic awareness, we ensure that children build a solid foundation in literacy that will support their academic growth.</p>
            <Link to="/phonics" className="learn-more">Learn More</Link>
          </div>
        </div>
        <div className="course-content">
          <img src={tuitionImage} alt="Tuition" />
          <div className="text">
            <h3>Tuition (One-on-One Coaching)</h3>
            <p>Our Tuition program offers personalized one-on-one coaching to help students excel in their studies. With customized lesson plans and individual attention, we cater to each student's unique learning needs, ensuring they achieve their full potential.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;

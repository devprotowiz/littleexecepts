import React from 'react';
import '../styles/Phonics.css';
import { FaUser, FaClock, FaChalkboardTeacher, FaRupeeSign, FaBook, FaCheck } from 'react-icons/fa';
import beginnersImage from '../assets/images/phonics.jpg'; // Ensure the image path is correct
import intermediateImage from '../assets/images/phonics1.avif'; // Ensure the image path is correct
import advancedImage from '../assets/images/phonics2.avif'; // Ensure the image path is correct

const Phonics = () => {
  return (
    <div className="phonics-page">
      <div className="course-card">
        <img src={beginnersImage} alt="Beginners Level" className="course-image" />
        <h3>Beginners Level</h3>
        <div className="course-details">
          <p><FaUser className="icon" /> Age Group: 3.5 to 5 years</p>
          <p><FaClock className="icon" /> Class duration: 60 minutes per day</p>
          <p><FaChalkboardTeacher className="icon" /> Course duration: 2 months (24 classes)</p>
          <p><FaBook className="icon" /> Classes per week: 3 days</p>
          <p><FaUser className="icon" /> Batch size: 1 teacher : 6 students</p>
          <p><FaRupeeSign className="icon" /> Fees: 1000/- per month</p>
          <h4>What will your child learn?</h4>
          <ul>
            <li><FaCheck className="check-icon" /> Alphabet sounds</li>
            <li><FaCheck className="check-icon" /> CVC 3 letter words</li>
            <li><FaCheck className="check-icon" /> CVCC 4 letter words</li>
            <li><FaCheck className="check-icon" /> Short sentences</li>
            <li><FaCheck className="check-icon" /> Common sight words</li>
          </ul>
        </div>
      </div>
      
      <div className="course-card">
        <img src={intermediateImage} alt="Intermediate Level" className="course-image" />
        <h3>Intermediate Level</h3>
        <div className="course-details">
          <p><FaUser className="icon" /> Age Group: 5 to 8 years</p>
          <p><FaClock className="icon" /> Class duration: 60 minutes per day</p>
          <p><FaChalkboardTeacher className="icon" /> Course duration: 4 months (48 classes)</p>
          <p><FaBook className="icon" /> Classes per week: 3 days</p>
          <p><FaUser className="icon" /> Eligibility: must know the topics mentioned in beginners Level</p>
          <p><FaUser className="icon" /> Batch size: 1 teacher : 6 students</p>
          <p><FaRupeeSign className="icon" /> Fees: 1200/- per month</p>
          <h4>What will your child learn?</h4>
          <ul>
            <li><FaCheck className="check-icon" /> Floss rule words</li>
            <li><FaCheck className="check-icon" /> Consonant blends</li>
            <li><FaCheck className="check-icon" /> Digraphs</li>
            <li><FaCheck className="check-icon" /> Trigraph (tch and dge)</li>
            <li><FaCheck className="check-icon" /> Short oo and Long oo</li>
            <li><FaCheck className="check-icon" /> Consonant + le</li>
            <li><FaCheck className="check-icon" /> Magic E</li>
            <li><FaCheck className="check-icon" /> Short and long sentence reading</li>
            <li><FaCheck className="check-icon" /> Age appropriate Story reading</li>
          </ul>
        </div>
      </div>
      
      <div className="course-card">
        <img src={advancedImage} alt="Advanced Level" className="course-image" />
        <h3>Advanced Level</h3>
        <div className="course-details">
          <p><FaUser className="icon" /> Age Group: 8 to 12 years</p>
          <p><FaClock className="icon" /> Class duration: 60 minutes per day</p>
          <p><FaChalkboardTeacher className="icon" /> Course duration: 4 months (48 classes)</p>
          <p><FaBook className="icon" /> Classes per week: 3 days</p>
          <p><FaUser className="icon" /> Eligibility: must know the topics mentioned in both beginners and Intermediate Levels</p>
          <p><FaUser className="icon" /> Batch size: 1 teacher : 6 students</p>
          <p><FaRupeeSign className="icon" /> Fees: 1500/- per month</p>
          <h4>What will your child learn?</h4>
          <ul>
            <li><FaCheck className="check-icon" /> Soft C and Soft G</li>
            <li><FaCheck className="check-icon" /> Vowel Teams</li>
            <li><FaCheck className="check-icon" /> Diphthongs</li>
            <li><FaCheck className="check-icon" /> Other letter combinations</li>
            <li><FaCheck className="check-icon" /> Common spelling rules</li>
            <li><FaCheck className="check-icon" /> Tricky words</li>
            <li><FaCheck className="check-icon" /> Age appropriate Story reading</li>
            <li><FaCheck className="check-icon" /> Can read up to 12 letter words</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Phonics;

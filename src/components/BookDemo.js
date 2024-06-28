import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/BookDemo.css';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBGv_JDThSw2qkGDdOmASjhf1DnlDxfls",
  authDomain: "little-experts.firebaseapp.com",
  projectId: "little-experts",
  storageBucket: "little-experts.appspot.com",
  messagingSenderId: "649669171995",
  appId: "1:649669171995:web:3941f95f4e57465f6111be",
  measurementId: "G-2DL0Q9WQMF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const BookDemo = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    contactNumber: '',
    course: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!/^\d{10}$/.test(formData.contactNumber)) {
        throw new Error('Contact number must be exactly 10 digits');
      }
      await addDoc(collection(db, "bookings"), { ...formData, contactNumber: '+91' + formData.contactNumber });
      toast.success('Demo booked successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setFormData({ name: '', age: '', email: '', contactNumber: '', course: '' });
    } catch (error) {
      toast.error(`Error booking demo: ${error.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="book-demo">
      <h2>Book a Free Demo</h2>
      <p>Schedule a free demo session to experience our unique approach to education firsthand.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Student's Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email ID</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number</label>
          <div className="input-group">
            <span className="input-prefix">+91</span>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              pattern="\d{10}"
              maxLength="10"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="course">Select Course</label>
          <select
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select a course</option>
            <option value="Phonics">Phonics</option>
            <option value="one on one tuition">one on one tuition</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default BookDemo;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import WhyChooseUs from './components/WhyChooseUs';
import Courses from './components/Courses';
import BookDemo from './components/BookDemo';
import ContactUs from './components/ContactUs';
import Phonics from './components/Phonics';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <section id="home">
                  <Home />
                </section>
                <section id="about-us">
                  <AboutUs />
                </section>
                <section id="why-choose-us">
                  <WhyChooseUs />
                </section>
                <section id="courses">
                  <Courses />
                </section>
                <section id="book-demo">
                  <BookDemo />
                </section>
                <section id="contact-us">
                  <ContactUs />
                </section>
              </>
            } />
            <Route path="/phonics" element={<Phonics />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

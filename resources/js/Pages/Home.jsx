import React from 'react';
import { Link as ScrollLink, Element } from 'react-scroll';
import { Head } from '@inertiajs/react';

const Home = () => {
  return (
    <>
      <Head title="Three First Names & Associates" />
      <div>
        <header>
          <nav>
            <ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink>
            <ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink>
            <ScrollLink to="services" smooth={true} duration={500}>Services</ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink>
          </nav>
        </header>

        <Element name="home">
          <section id="home">
            <h1>Three First Names & Associates</h1>
            <p>Your trusted partners in professional services</p>
          </section>
        </Element>

        <Element name="about">
          <section id="about">
            <h2>About Us</h2>
            <p>We are a team of experienced professionals dedicated to delivering exceptional results.</p>
          </section>
        </Element>

        <Element name="services">
          <section id="services">
            <h2>Our Services</h2>
            <ul>
              <li>Strategic Consulting</li>
              <li>Financial Advisory</li>
              <li>Legal Services</li>
            </ul>
          </section>
        </Element>

        <Element name="contact">
          <section id="contact">
            <h2>Contact Us</h2>
            <form>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <textarea placeholder="Message"></textarea>
              <button type="submit">Send</button>
            </form>
          </section>
        </Element>

        <footer>
          <p>&copy; 2024 Three First Names & Associates. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default Home;

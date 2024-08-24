import React from 'react';
import { Link as ScrollLink, Element } from 'react-scroll';
import { Head } from '@inertiajs/react';

const Home = () => {
  return (
    <>
      <Head title="Three First Names & Associates" />
      <div className="bg-gray-100 min-h-screen">
        <header className="bg-indigo-900 text-white fixed w-full z-10">
          <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
            <ScrollLink to="home" smooth={true} duration={500} className="text-xl font-bold">
              TFN & Associates
            </ScrollLink>
            <div className="flex space-x-4">
              <ScrollLink to="home" smooth={true} duration={500} className="hover:text-blue-300 cursor-pointer">Home</ScrollLink>
              <ScrollLink to="about" smooth={true} duration={500} className="hover:text-blue-300 cursor-pointer">About</ScrollLink>
              <ScrollLink to="services" smooth={true} duration={500} className="hover:text-blue-300 cursor-pointer">Services</ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={500} className="hover:text-blue-300 cursor-pointer">Contact</ScrollLink>
            </div>
          </nav>
        </header>

        <Element name="home">
          <section id="home" className="pt-20 min-h-screen flex items-center bg-blue-100">
            <div className="container mx-auto px-6 text-center">
              <h1 className="text-5xl font-bold text-indigo-900 mb-4">Three First Names & Associates</h1>
              <p className="text-xl text-gray-700">Your trusted partners in professional services</p>
            </div>
          </section>
        </Element>

        <Element name="about">
          <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-indigo-900 mb-8">About Us</h2>
              <p className="text-gray-700">We are a team of experienced professionals dedicated to delivering exceptional results.</p>
            </div>
          </section>
        </Element>

        <Element name="services">
          <section id="services" className="py-20 bg-indigo-900 text-white">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold mb-8">Our Services</h2>
              <ul className="list-disc list-inside">
                <li>Strategic Consulting</li>
                <li>Financial Advisory</li>
                <li>Legal Services</li>
              </ul>
            </div>
          </section>
        </Element>

        <Element name="contact">
          <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-indigo-900 mb-8">Contact Us</h2>
              <form className="max-w-md mx-auto">
                <input type="text" placeholder="Name" className="w-full mb-4 p-2 border border-gray-300 rounded" />
                <input type="email" placeholder="Email" className="w-full mb-4 p-2 border border-gray-300 rounded" />
                <textarea placeholder="Message" className="w-full mb-4 p-2 border border-gray-300 rounded h-32"></textarea>
                <button type="submit" className="w-full bg-indigo-900 text-white py-2 px-4 rounded hover:bg-indigo-700 transition duration-300">Send</button>
              </form>
            </div>
          </section>
        </Element>

        <footer className="bg-indigo-900 text-white py-6">
          <div className="container mx-auto px-6 text-center">
            <p>&copy; 2024 Three First Names & Associates. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;

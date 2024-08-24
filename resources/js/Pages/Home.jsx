import React from "react";
import { Link } from "@inertiajs/react";

const Home = () => {
    return (
        <div>
            <header>
                <nav>
                    <Link href="#home">Home</Link>
                    <Link href="#about">About</Link>
                    <Link href="#services">Services</Link>
                    <Link href="#contact">Contact</Link>
                </nav>
            </header>

            <section id="home">
                <h1>Three First Names & Associates</h1>
                <p>Your trusted partners in professional services</p>
            </section>

            <section id="about">
                <h2>About Us</h2>
                <p>
                    We are a team of experienced professionals dedicated to
                    delivering exceptional results.
                </p>
            </section>

            <section id="services">
                <h2>Our Services</h2>
                <ul>
                    <li>Service 1</li>
                    <li>Service 2</li>
                    <li>Service 3</li>
                </ul>
            </section>

            {/* Contact Form  */}
            <section id="contact">
                <h2>Contact Us</h2>
                <form>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="email" />
                    <textarea placeholder="Message" name="" id=""></textarea>
                    <button type="submit">Send</button>
                </form>
            </section>

            {/* Footer */}
            <footer>
                <p>
                    &copy; 2024 Three First Names & Associates. All rights
                    reserved.
                </p>
            </footer>
        </div>
    );
};

export default(Home);

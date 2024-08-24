import React, { useEffect, useRef } from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import { Head } from "@inertiajs/react";
import { FaLightbulb, FaChartLine, FaBalanceScale } from "react-icons/fa";
// import ScrollToTopButton from "../Components/ScrollToTopButton";

import gsap from "gsap";

const Home = () => {
    const blob1Ref = useRef(null);
    const blob2Ref = useRef(null);

    useEffect(() => {
        const blob1 = blob1Ref.current;
        const blob2 = blob2Ref.current;

        gsap.to(blob1, {
            x: "10%",
            y: "10%",
            duration: 20,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });

        gsap.to(blob2, {
            x: "-10%",
            y: "-10%",
            duration: 15,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });
    }, []);

    return (
        <>
            <Head title="Three First Names & Associates" />
            <div className="bg-gray-100 min-h-screen relative overflow-hidden">
                {/* Blob SVGs */}
                <svg
                    viewBox="0 0 200 200"
                    className="absolute top-0 left-0 w-1/2 h-1/2 text-blue-300 opacity-50 pointer-events-none"
                    ref={blob1Ref}
                >
                    <path
                        fill="currentColor"
                        d="M44.6,-76.9C59.3,-70.2,73.4,-60.8,79.9,-47.4C86.5,-34,85.5,-16.5,83.8,-0.1C82.1,16.3,79.6,32.5,71.8,45.8C63.9,59.1,50.6,69.4,36.1,76.4C21.5,83.3,5.8,86.9,-10.2,85.7C-26.2,84.5,-42.5,78.5,-56.3,68.9C-70.1,59.3,-81.3,46.1,-87.6,30.7C-93.9,15.3,-95.2,-2.4,-91.2,-18.8C-87.2,-35.2,-77.8,-50.3,-64.6,-60.4C-51.4,-70.5,-34.4,-75.6,-18.2,-77.6C-2,-79.6,13.4,-78.5,28.1,-77.7C42.8,-76.9,56.8,-76.4,44.6,-76.9Z"
                        transform="translate(100 100)"
                    />
                </svg>
                <svg
                    viewBox="0 0 200 200"
                    className="absolute bottom-0 right-0 w-1/2 h-1/2 text-indigo-300 opacity-50 pointer-events-none"
                    ref={blob2Ref}
                >
                    <path
                        fill="currentColor"
                        d="M45.3,-78.3C58.9,-70.9,70.3,-59.2,77.7,-45.3C85.2,-31.3,88.7,-15.7,88.9,0.1C89,15.9,85.8,31.8,78.1,45.3C70.3,58.8,58,69.8,44.1,77.7C30.1,85.6,15.1,90.3,-0.6,91.3C-16.2,92.3,-32.5,89.6,-46.5,82.1C-60.5,74.6,-72.3,62.3,-80.1,47.8C-87.9,33.3,-91.8,16.7,-91.7,0.1C-91.5,-16.5,-87.3,-32.9,-79.1,-47C-70.8,-61,-58.5,-72.6,-44.5,-79.6C-30.4,-86.6,-15.2,-89,-0.2,-88.7C14.8,-88.3,29.6,-85.2,45.3,-78.3Z"
                        transform="translate(100 100)"
                    />
                </svg>

                <header className="bg-indigo-900 text-white fixed w-full z-10">
                    <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
                        <ScrollLink
                            to="home"
                            smooth={true}
                            duration={500}
                            className="text-xl font-bold"
                        >
                            TFN & Associates
                        </ScrollLink>
                        <div className="flex space-x-4">
                            <ScrollLink
                                to="home"
                                smooth={true}
                                duration={500}
                                className="hover:text-blue-300 cursor-pointer"
                            >
                                Home
                            </ScrollLink>
                            <ScrollLink
                                to="about"
                                smooth={true}
                                duration={500}
                                className="hover:text-blue-300 cursor-pointer"
                            >
                                About
                            </ScrollLink>
                            <ScrollLink
                                to="services"
                                smooth={true}
                                duration={500}
                                className="hover:text-blue-300 cursor-pointer"
                            >
                                Services
                            </ScrollLink>
                            <ScrollLink
                                to="contact"
                                smooth={true}
                                duration={500}
                                className="hover:text-blue-300 cursor-pointer"
                            >
                                Contact
                            </ScrollLink>
                        </div>
                    </nav>
                </header>

                <Element name="home">
                    <section
                        id="home"
                        className="pt-20 min-h-screen flex items-center bg-blue-100 relative"
                    >
                        <div className="container mx-auto px-6 text-center relative z-10">
                            <h1 className="text-5xl font-bold text-indigo-900 mb-4">
                                Three First Names & Associates
                            </h1>

                            <p className="text-xl text-gray-700">
                                Your trusted partners in professional services
                            </p>
                        </div>
                    </section>
                </Element>

                <Element name="about">
                    <section id="about" className="py-20 bg-white">
                        <div className="container mx-auto px-6">
                            <h2 className="text-3xl font-bold text-indigo-900 mb-8">
                                About Us
                            </h2>
                            <p className="text-gray-700">
                                We are a team of experienced professionals
                                dedicated to delivering exceptional results.
                            </p>
                        </div>
                    </section>
                </Element>

                <Element name="services">
                    <section
                        id="services"
                        className="py-20 bg-indigo-900 text-white"
                    >
                        <div className="container mx-auto px-6">
                            <h2 className="text-3xl font-bold mb-8">
                                Our Services
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="flex flex-col items-center">
                                    <FaLightbulb className="text-5xl mb-4" />
                                    <h3 className="text-xl font-semibold mb-2">
                                        Strategic Consulting
                                    </h3>
                                    <p className="text-center">
                                        Innovative solutions for your business
                                        challenges.
                                    </p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <FaChartLine className="text-5xl mb-4" />
                                    <h3 className="text-xl font-semibold mb-2">
                                        Financial Advisory
                                    </h3>
                                    <p className="text-center">
                                        Expert guidance for your financial
                                        decisions.
                                    </p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <FaBalanceScale className="text-5xl mb-4" />
                                    <h3 className="text-xl font-semibold mb-2">
                                        Legal Services
                                    </h3>
                                    <p className="text-center">
                                        Comprehensive legal support for your
                                        business.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </Element>

                <Element name="contact">
                    <section id="contact" className="py-20 bg-white">
                        <div className="container mx-auto px-6">
                            <h2 className="text-3xl font-bold text-indigo-900 mb-8">
                                Contact Us
                            </h2>
                            <form className="max-w-md mx-auto">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full mb-4 p-2 border border-gray-300 rounded"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full mb-4 p-2 border border-gray-300 rounded"
                                />
                                <textarea
                                    placeholder="Message"
                                    className="w-full mb-4 p-2 border border-gray-300 rounded h-32"
                                ></textarea>
                                <button
                                    type="submit"
                                    className="w-full bg-indigo-900 text-white py-2 px-4 rounded hover:bg-indigo-700 transition duration-300"
                                >
                                    Send
                                </button>
                            </form>
                        </div>
                    </section>
                  {/* <ScrollToTopButton /> */}

                </Element>

                <footer className="bg-indigo-900 text-white py-6">
                    <div className="container mx-auto px-6 text-center">
                        <p>
                            &copy; 2024 Three First Names & Associates. All
                            rights reserved.
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Home;


// TODO: add text typing animation


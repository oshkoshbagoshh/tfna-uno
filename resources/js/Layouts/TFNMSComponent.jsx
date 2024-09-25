import React from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const TFNMSComponent = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Header */}
            <header className="bg-white shadow-md">
                <div className="container mx-auto px-4 py-6 flex justify-between items-center">
                    <div className="text-2xl font-bold text-gray-800">TFNMS</div>
                    <nav className="hidden md:flex space-x-6">
                        <a href="#home" className="text-gray-600 hover:text-gray-800">Home</a>
                        <a href="#about" className="text-gray-600 hover:text-gray-800">About</a>
                        <a href="#services" className="text-gray-600 hover:text-gray-800">Services</a>
                        <a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a>
                    </nav>
                    <button onClick={toggleMobileMenu} className="md:hidden">
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-white py-2">
                        <a href="#home" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Home</a>
                        <a href="#about" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">About</a>
                        <a href="#services" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Services</a>
                        <a href="#contact" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Contact</a>
                    </div>
                )}
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                {/* Hero Section */}
                <section id="home" className="text-center py-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to TFNMS</h1>
                    <p className="text-xl text-gray-600 mb-8">Media and Music Services</p>
                    <a href="#contact" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
                        Get Started
                    </a>
                </section>

                {/* About Section */}
                <section id="about" className="py-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">About Us</h2>
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                            <img
                                src="/images/aboutMe.png"
                                alt="Profile Picture"
                                className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg"
                            />
                        </div>
                        <div className="md:w-2/3 md:pl-8">
                            <p className="text-gray-600">
                                TFNMS is a leading provider of media and music services. We specialize in creating high-quality audio content for various industries. Our team of experienced professionals is dedicated to delivering exceptional results for all your audio needs.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="py-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Services</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Music Production</h3>
                            <p className="text-gray-600">Professional music production services for artists and businesses.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Audio Engineering</h3>
                            <p className="text-gray-600">Expert audio engineering for podcasts, commercials, and more.</p>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
                    <form className="max-w-lg mx-auto">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                            <input type="text" id="name" className="w-full px-3 py-2 border rounded-lg" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                            <input type="email" id="email" className="w-full px-3 py-2 border rounded-lg" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                            <textarea id="message" rows={4} className="w-full px-3 py-2 border rounded-lg"></textarea>
                        </div>
                        <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
                            Send Message
                        </button>
                    </form>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto px-4 text-center">
                    <p>&copy; 2024 TFNMS. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default TFNMSComponent;

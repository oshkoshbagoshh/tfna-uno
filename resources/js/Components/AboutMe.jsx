import React from "react";

const AboutMe = () => {
    return (
        <div
            className="min-h-screen bg-gradient-to-br from-purple-900 to-gray-900 flex justify-center items-center p-4">
            <div
                className="flex flex-col md:flex-row w-full max-w-4xl bg-white bg-opacity-10 rounded-2xl overflow-hidden shadow-2xl">
                <div className="flex-1 p-8 flex flex-col justify-center items-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">ABOUT ME</h1>
                    <img
                        src="/images/aboutMe.png"
                        alt="Profile Picture"
                        className="w-48 h-48 rounded-full object-cover border-4 border-white mb-6"/>
                </div>
                <div className="md:w-2/3 md:pl-8">
                    <p className="text-white text-base leading-relaxed"> Lorem ipsum dolor sit amet, consectetuer
                        adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
                        pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
                        vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                        justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                        elementum
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;

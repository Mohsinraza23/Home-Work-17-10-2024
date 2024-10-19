import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

const Home = () => {
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* About Me Section */}
      <section
        id="about"
        className="p-8 md:p-16 bg-gradient-to-r from-indigo-100 via-purple-50 to-indigo-100 text-gray-900"
      >
        <div className="container mx-auto text-center bg-white p-6 shadow-lg rounded-lg transition hover:bg-indigo-50 transform hover:scale-105 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-600 mb-6">
            About Me
          </h2>
          <p className="text-lg md:text-xl leading-relaxed">
            Hi, I&apos;m Mohsin Raza, a passionate Full-Stack Developer with
            expertise in building responsive, user-friendly web applications. I
            love working with modern web technologies like Next.js, React,
            Tailwind CSS, and TypeScript to create dynamic and visually
            appealing websites. I&apos;m driven by the desire to continuously learn
            and improve, and I believe in the power of technology to solve
            real-world problems.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="p-8 md:p-16 bg-gradient-to-r from-purple-100 via-indigo-100 to-purple-50 text-gray-900"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-600 mb-6">
            Portfolio
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Here are a few projects I&apos;ve worked on, showcasing my journey in web
            development. These projects reflect the skills I&apos;ve acquired and the
            passion I have for building exceptional web experiences.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-lg transition hover:bg-indigo-50 transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-2 text-purple-600">
                Project 1
              </h3>
              <p>
                A feature-rich web application built with React and Tailwind
                CSS.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg transition hover:bg-indigo-50 transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-2 text-purple-600">
                Project 2
              </h3>
              <p>
                A dynamic e-commerce website developed using Next.js and
                TypeScript.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg transition hover:bg-indigo-50 transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-2 text-purple-600">
                Project 3
              </h3>
              <p>
                A portfolio website showcasing clean UI design and responsive
                layouts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="p-8 md:p-16 bg-gradient-to-r from-indigo-100 via-purple-50 to-indigo-100 text-gray-900"
      >
        <div className="container mx-auto text-center bg-white p-6 shadow-lg rounded-lg transition hover:bg-indigo-50 transform hover:scale-105 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-indigo-600 mb-6">
            Contact Me
          </h2>
          <p className="text-lg md:text-xl mb-6">
            I&apos;m always open to collaborating on new projects or just having a
            chat! Feel free to reach out to me via email at:
            <a
              href="mailto:mohsinraza@gmail.com"
              className="text-indigo-600 hover:underline transition-colors duration-300"
            >
              {" "}
              mohsinraza234@gmail.com
            </a>
            .
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;

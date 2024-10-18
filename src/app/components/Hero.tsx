// components/Hero.tsx
const Hero = () => {
    return (
      <section className="bg-gradient-to-r from-purple-500 to-indigo-600 py-16 flex justify-center items-center">
        <div className="bg-indigo-300 rounded-lg shadow-lg p-8 max-w-2xl text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900 animate-fadeIn">
            Welcome to My World of Development
          </h2>
          <p className="mt-4 text-gray-900 animate-fadeIn delay-500">
            Hi, I'm Mohsin Raza, a dedicated full-stack developer and software engineer
            specializing in creating elegant, scalable, and intuitive web solutions. With expertise
            in TypeScript, Next.js, React, and Tailwind CSS, I strive to deliver seamless user experiences.
            My passion lies in crafting cutting-edge applications that merge creativity with functionality.
            I hold a Bachelor's degree in Science and am a proud graduate of Full-Stack Development and
            AI Engineering programs from PIAIC.
          </p>
        </div>
      </section>
    );
  };
  
  export default Hero;
  
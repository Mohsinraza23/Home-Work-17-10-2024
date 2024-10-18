// components/Header.tsx
const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-5 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold hover:text-yellow-400 transition-colors duration-300">
          My Next.js Website
        </h1>
        <nav className="flex items-center space-x-6">
          {/* Responsive Menu */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <a href="/" className="hover:text-yellow-400 transition-colors duration-300 ">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-400 transition-colors duration-300">About</a>
            </li>
            <li>
              <a href="#services" className="hover:text-yellow-400 transition-colors duration-300">Services</a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-yellow-400 transition-colors duration-300">Portfolio</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-400 transition-colors duration-300">Contact</a>
            </li>
          </ul>
          {/* Blog Button on Left Corner */}
          <div className="ml-auto">
            <a
              href="#blog"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded-full transition-transform transform hover:scale-110 focus:outline-none"
            >
              Blog
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header; 
  
  
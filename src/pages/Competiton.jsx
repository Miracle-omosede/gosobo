import competition from '../assets/images/competition.jpg';
import cardImg from '../assets/images/writer.jpg';
import Navbar from '../components/Navbar';

const Competiton = () => {
  return (
    <div className="bg-black w-full min-h-screen">
      {/* Navbar */}
      {/* <Navbar /> */}

      {/* Hero Section */}
      <div className="relative md:h-[400px] h-[200px] w-full ">
        {/* Background Image */}
        <img
          src={competition}
          alt="competition"
          className="object-cover w-full h-full"
        />

        {/* Dark Overlay Mask */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Heading */}
        <div className="absolute inset-0 flex justify-center items-center text-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold px-4 nevada">
            Writing Competition
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-[1100px] px-4 py-8 mx-auto">
        {/* Responsive Card */}
        <div className="flex flex-col md:flex-row bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          {/* Image Section */}
          <img
            src={cardImg}
            alt="1st Edition Contest"
            className="w-full md:w-1/2 object-cover"
          />

          {/* Text Section */}
          <div className="flex flex-col justify-center p-6 space-y-4 md:w-1/2 font-dm-sans">
            <h1 className="text-white text-2xl md:text-3xl font-bold">
              1st EDITION 
            </h1>
            <p className="text-gray-300 text-sm md:text-base">
              Participate in the inaugural contest and showcase your creativity to a global audience. Amazing prizes await!
            </p>
            <div className="flex space-x-4">
              {/* Call-to-Action Buttons */}
              <a href='https://forms.gle/Y12wZ2MytdbXNZMm6' className="bg-dark-cyan text-white px-5 py-2 rounded-lg hover:bg-teal-600 transition duration-300">
                Sign Up
              </a>
              {/* <button className="bg-transparent border border-gray-500 text-gray-300 px-5 py-2 rounded-lg hover:bg-gray-700 hover:text-white transition duration-300">
                Learn More
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competiton;

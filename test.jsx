import ImageSlider from "./ImageCarsol";

function AboutSection() {
  return (
    <div className="container px-4 lg:px-8 mx-auto max-w-screen-xl text-gray-700 ">
      <div className="mt-24 flex flex-col-reverse md:flex-row items-start md:space-x-10">
        <ImageSlider />
        <div data-aos="zoom-in-left" className="md:w-5/12">
          <h1 className="font-semibold text-darken text-2xl lg:pr-30">
            Our Story How Ekkam Started?
          </h1>
          <p className="text-gray-500 my-5 lg:pr-10">
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos.
          </p>
          <p className="text-gray-500 my-5 lg:pr-10">
            Some of the students and teachers were greatly helped by the
            Dhakshin Ekkam.
          </p>
          <p className="text-gray-500 my-5 lg:pr-10">
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos
          </p>
          <button className="flex items-center space-x-3 pl-3 border-b border-l border-t border-yellow-500 text-yellow-500 font-medium my-4 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out rounded-full">
            <span>More Info</span>
            <div className="border border-yellow-500 h-14 w-14 rounded-full flex items-center justify-center">
              <svg
                className="w-5 h-5"
                viewBox="0 0 26 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.7071 8.70711C26.0976 8.31658 26.0976 7.68342 25.7071 7.2929L19.3431 0.928934C18.9526 0.538409 18.3195 0.538409 17.9289 0.928934C17.5384 1.31946 17.5384 1.95262 17.9289 2.34315L23.5858 8L17.9289 13.6569C17.5384 14.0474 17.5384 14.6805 17.9289 15.0711C18.3195 15.4616 18.9526 15.4616 19.3431 15.0711L25.7071 8.70711ZM-8.74228e-08 9L25 9L25 7L8.74228e-08 7L-8.74228e-08 9Z"
                  fill="#F48C06"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;

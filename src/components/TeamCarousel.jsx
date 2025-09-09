import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const teamMembers = [
  { name: "Chairperson Name", role: "Chairperson", img: "/img/profile.png" },
  {
    name: "Stefan Mikic",
    role: "Head of Development",
    img: "/img/profile.png",
  },
  { name: "Marko Vukic", role: "Head of Development", img: "/img/profile.png" },
  { name: "Tamara Vitas", role: "Project Manager", img: "/img/profile.png" },
  // ... more members
];

const TeamCarousel = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2500,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3, // default for desktops
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280, // xl screens
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768, // tablets & below
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="relative bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-4xl font-bold text-center mb-3">Our ChairPerson</h2>
        <p className="text-center text-gray-600 mb-8">
          Meet our amazing chairperson and team members.
        </p>

        <div className="team-carousel relative mt-20">
          {/* <style>{`
            .team-carousel .slick-list,
            .team-carousel .slick-track,
            .team-carousel .slick-slide {
              overflow: visible !important;
            }
       

          `}</style> */}

          <Slider {...settings}>
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="px-3 sm:px-4"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div className="team-card bg-yellow-100 rounded-xl shadow-lg p-6 pt-16 text-center flex flex-col items-center relative">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-28 h-28 rounded-full border-4 border-white shadow-md absolute -top-14 left-1/2 transform -translate-x-1/2 object-cover z-30"
                  />
                  <h3 className="text-lg font-bold text-gray-900 mt-16">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{member.role}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TeamCarousel;

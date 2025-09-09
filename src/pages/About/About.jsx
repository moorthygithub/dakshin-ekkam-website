import AboutUsDetails from "../../components/EverythingYouCanDo";
import HeroSub from "../../components/HeroSub";
import TeamCarousel from "../../components/TeamCarousel";

const About = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
  ];
  return (
    <>
      <HeroSub
        title="About Us"
        description=""
        breadcrumbLinks={breadcrumbLinks}
      />
      <AboutUsDetails />
      <TeamCarousel />
    </>
  );
};

export default About;

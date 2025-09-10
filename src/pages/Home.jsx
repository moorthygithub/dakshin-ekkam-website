import AllInOne from "../components/AllInOne";
import Assessments from "../components/Assessments";
import ClassManagement from "../components/ClassManagement";
import AboutUsDetails from "../components/EverythingYouCanDo";
import Hero from "../components/Hero";
import Info from "../components/Info";
import Integrations from "../components/Integrations";
import LatestNews from "../components/LatestNews";
import OneOnOneDiscussions from "../components/OneOnOneDiscussions";
import SeeMoreFeatures from "../components/SeeMoreFeatures";
import Testimonial from "../components/Testimonial";
import ToolsForTeachers from "../components/ToolsForTeachers";
import UserInterface from "../components/UserInterface";

function Home() {
  return (
    <div>
      <Hero />
      <AllInOne />
      <LatestNews />
      <Info />
      {/* <AboutUsDetails />
      <UserInterface />
      <ToolsForTeachers />
      <Assessments />
      <ClassManagement />
      <OneOnOneDiscussions />
      <SeeMoreFeatures />
      <Integrations />
      <Testimonial /> */}
    </div>
  );
}

export default Home;

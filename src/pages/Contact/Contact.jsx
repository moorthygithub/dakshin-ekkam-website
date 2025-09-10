import ContactForm from "../../components/ContactForm/ContactForm";
import ContactInfo from "../../components/ContactForm/ContactInfo";
import ContactLocation from "../../components/ContactForm/ContactLocation";
import HeroSub from "../../components/HeroSub";

const Contact = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
  ];
  return (
    <>
      <HeroSub
        title="Contact"
        description="We’d love to hear from you! Whether you have questions, suggestions, or just want to connect, our team is here to help. Reach out to us and become part of a growing community built on care, support, and togetherness."
        breadcrumbLinks={breadcrumbLinks}
      />
      <ContactInfo />
      <ContactForm />
      <ContactLocation />
    </>
  );
};

export default Contact;

import {
  FaInfoCircle,
  FaServicestack,
  FaImages,
  FaProjectDiagram,
  FaPhoneAlt,
  FaQuestionCircle
} from "react-icons/fa";
import "./BottomNavbar.css";

const BottomNavbar = () => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bottom-nav">
      <button onClick={() => scrollToSection("about")}>
        <FaInfoCircle />
        <span>About</span>
      </button>

      <button onClick={() => scrollToSection("services")}>
        <FaServicestack />
        <span>Services</span>
      </button>

      <button onClick={() => scrollToSection("gallery")}>
        <FaImages />
        <span>Gallery</span>
      </button>

      <button onClick={() => scrollToSection("projects")}>
        <FaProjectDiagram />
        <span>Projects</span>
      </button>

      <button onClick={() => scrollToSection("contact")}>
        <FaPhoneAlt />
        <span>Contact</span>
      </button>

      <button onClick={() => scrollToSection("help")}>
        <FaQuestionCircle />
        <span>Help</span>
      </button>
    </div>
  );
};

export default BottomNavbar;
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <>
    <Navbar />
    <div className="landing-page">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Welcome to MyWebsite</h1>
          <p>Your one-stop solution for amazing services and experiences!</p>
          <a href="#about" className="cta-button">Learn More</a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Us</h2>
        <p>
          At MyWebsite, we strive to provide top-notch services tailored to your
          needs. Our team is dedicated to ensuring your satisfaction every step
          of the way.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="service-list">
          <div className="service-item">
            <h3>Web Development</h3>
            <p>We create beautiful, responsive websites for businesses and individuals.</p>
          </div>
          <div className="service-item">
            <h3>Graphic Design</h3>
            <p>Our designs help your brand stand out in the crowd.</p>
          </div>
          <div className="service-item">
            <h3>Digital Marketing</h3>
            <p>Grow your business with our proven marketing strategies.</p>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default LandingPage;

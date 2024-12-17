import Header from "../Components/Header";
import Footer from "../Components/Footer";
import map from "../img/Map Image.jpg";
import contact from "../img/contact.jpg";
import "../Resources/contact.css"

const Contact = () => {
  return (
    <div className="contact">
      <Header />
      <section id="first">
      <div id="form">
          <h2>
            Get in touch <br /> with our expert</h2>
          <div id="input">
            <form action="" method="post">
              <input
                type="text"
                name="Name"
                id="text"
                placeholder="Your full Name"
              />
              <input
                type="email"
                name="Email"
                id="text"
                placeholder="Your Email"
              />
              <input
                type="text"
                name="Service"
                id="text"
                placeholder="Select service type"
              />
              <input
                type="text"
                name="message"
                id="text"
                placeholder="Message"
              />
              <input type="submit" id="submit" value="send message" />
            </form>
          </div>
        </div>
      <div style={{paddingTop:"70px"}}>
        <span>
        <p style={{margin:'2px'}}>Address</p>
        <h3 style={{margin:'2px'}}>No 6 Olayemi Street, Ikate, Surulere, Lagos.</h3>
        </span>
        <span style={{padding:'3px'}}>
        <p style={{margin:'2px'}}>contact address</p>
        <h3 style={{margin:'2px'}}>09023613664</h3>
        <h3 style={{margin:'2px'}}>OGCautoservices@gmail.com</h3>
        </span>
        <span>
        <p style={{margin:'2px'}}>Opening Hours</p>
        <h3 style={{margin:'2px'}}>Monday to Friday 9:00 AM to 10:00AM</h3>
        </span>
      </div>
      </section>
      <section id="map">
        
        <img src={contact} alt="shop" id="shop" />
      </section>
      <Footer />
    </div>
  );
};
export default Contact;

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import img1 from "../img/mech.png";
import img2 from "../img/Icon.png";
import img3 from "../img/customer service.png";
import img4 from "../img/expert.png";
import img5 from "../img/dollar.png";
import img6 from "../img/Arrow.png";
import img11 from "../img/car diagostics.png";
import img12 from "../img/engine repair.png";
import img13 from "../img/keg.png";
import img14 from "../img/body work.png";
import img15 from "../img/battery.png";
import img16 from "../img/insurance.png";
import img17 from "../img/customer service.png";
import img18 from "../img/wheel.png";
import img21 from "../img/logo.png";
import img22 from "../img/logo1.png";
import img23 from "../img/logo2.png";
import img24 from "../img/Testimonial 1.png";
import img25 from "../img/Testimonial 2.png";
import img26 from "../img/Arrow1.png";
import img27 from "../img/Arrow2.png";
import Touch from "../Components/Touch"
import Stats from "../Components/stats";
import Mnm from "../Components/mnm";

const Home = () => {
  return (
    <div>
      <Header />
      <section className="sec1">
        <div className="info">
          <div id="text-1">
            <h1>
              Get your vehicle
              <br /> service done online
              <br /> at one place
            </h1>
            <span>Book a service</span>
          </div>
          <div id="open">
            <img src={img2} alt="clock" />
            <div id="mon">
              <p>We are open</p>
              <h3>Monday to Friday from 9.00 AM to 10.00 AM</h3>
            </div>
          </div>
        </div>
        <div id="r-photo">
          <img src={img1} alt="space" id="mech" />
        </div>
      </section>
      <section className="sec2">
        <div id="service">
          <h1>
            We are taking car <br /> servicing seriously
          </h1>
          <div id="c-service">
            <img src={img3} alt="service" id="img" />
            <div>
              <h2>Convenient service</h2>
              <p>
                We offer the best services at the convenience of our customers{" "}
              </p>
            </div>
          </div>
          <div id="mechanics">
            <img src={img4} alt="mechanics" id="img" />
            <div>
              <h2> Expert mechanics</h2>
            </div>
          </div>
          <div id="pricing">
            <img src={img5} alt="pricing" id="img" />
            <div>
              <h2>Transparent pricing</h2>
            </div>
          </div>
          <div id="arrow">
            <p>Know more about us</p>
            <img src={img6} alt="arrow" />
          </div>
        </div>
        <div id="form">
          <h2>
            Get a quote for the car <br />
            service{" "}
          </h2>
          <div id="input">
            <form action="" method="post">
              <input
                type="text"
                name="location"
                id="text"
                placeholder="Enter your location (city)"
              />
              <input
                type="text"
                name="brand"
                id="text"
                placeholder="Enter your car brand"
              />
              <input
                type="text"
                name="model"
                id="text"
                placeholder="Enter your car model"
              />
              <input
                type="tel"
                name="telephone"
                id="text"
                placeholder="Enter your phone number"
              />
              <input type="submit" id="submit" value="Get your quote" />
            </form>
          </div>
        </div>
      </section>
      <section className="sec3">
        <div id="helpers">
          <h1>
            We follow a clear <br /> process to help you <br />
            out.
          </h1>
          <span>learn more</span>
        </div>
        <Mnm />
      </section>
      <section className="sec4">
        <div id="offer">
          <p>What we offer</p>
          <h1>
            We offer full service auto repair <br />& maintenance
          </h1>
        </div>
        <div id="services">
          <span id="sef">
            <img src={img11} alt="diagnostics" />
            <h3>Diagnostics</h3>
          </span>
          <span id="sef">
            <img src={img12} alt="engine repair" />
            <h3>Engine Repair</h3>
          </span>
          <span id="sef">
            <img src={img18} alt="wheel repair" />
            <h3>Wheel Repair</h3>
          </span>
          <span id="sef">
            <img src={img13} alt="oil filter" />
            <h3>Oil Filter</h3>
          </span>
          <span id="sef">
            <img src={img14} alt="body work" />
            <h3>Body Work</h3>
          </span>
          <span id="sef">
            <img src={img15} alt="batteries" />
            <h3>Batteries</h3>
          </span>
          <span id="sef">
            <img src={img16} alt="insurance claim" />
            <h3>Insurance Claim</h3>
          </span>
          <span id="sef">
            <img src={img17} alt="custom service" />
            <h3>Custom Service</h3>
          </span>
        </div>
        <div id="learn">
          <p>Learn more </p>
          <img src={img6} alt="learn more" />
        </div>
      </section>
      <section className="sec5">
          <Touch />
          <Stats/>
      </section>
     
      <section className="sec6">
        <div id="serve">
          <h1>Brands We Serve</h1>
        </div>
        <div id="spons">
          <span id="logo">
            <img src={img21} alt="logo" />
            <p>Formatic</p>
          </span>
          <span id="logo">
            <img src={img22} alt="logo" />
            <p>Surge</p>
          </span>
          <span id="logo">
            <img src={img23} alt="logo" />
            <p>Logoipsum</p>
          </span>
          <span id="logo">
            <img src={img21} alt="logo" />
            <p>Latex Autos</p>
          </span>
          <span id="logo">
            <img src={img22} alt="logo" />
            <p>Tobias</p>
          </span>
          <span id="logo">
            <img src={img23} alt="logo" />
            <p>Nivea</p>
          </span>
          <span id="logo">
            <img src={img21} alt="logo" />
            <p>Hamster</p>
          </span>
          <span id="logo">
            <img src={img22} alt="logo" />
            <p>Environ</p>
          </span>
          <span id="logo">
            <img src={img23} alt="logo" />
            <p>Collage Autos</p>
          </span>
          <span id="logo">
            <img src={img21} alt="logo" />
            <p>Churchgate</p>
          </span>
        </div>
      </section>
      <section className="sec7">
        <div id="testimonial">
          <h1>Our Customers Say The Nicest Things </h1>
          <h2>About Our Service</h2>
        </div>
        <div id="testimg">
          <img src={img24} alt="testimonial" />
          <img src={img25} alt="testimonial2" />
        </div>
        <div id="navi">
          <div id="color">
            <span id="grey"></span>
            <span id="grey"></span>
            <span id="range"></span>
            <span id="grey"></span>
          </div>
          <div id="row">
            <span id="l-arr">
              <img src={img26} alt="" />
            </span>
            <span id="r-arr">
              <img src={img27} alt="arrow" />
            </span>
          </div>
        </div>
      </section>
      <section className="sec8">
        <div id="freq">
          <h1>Frequently Asked Questions</h1>
        </div>
        <div id="quest">
          <div id="take">
            <div id="hide">
              <h2 className="FAQ">How long should a car repair take?</h2>
              <span id="tab">
                <h1>-</h1>
              </span>
            </div>
            <p>
              I have got my car repaired at Finsweet many times before, they are
              good at what <br /> they do. </p>
          </div>
          <div id="same">
            <h2 className="FAQ">How do I schedule my car's appointment?</h2>
            <span id="tab">
              <h1>+</h1>
            </span>
          </div>
          <div id="came">
            <h2 className="FAQ">What are the repair services provided?</h2>
            <span id="tab">
              <h1>+</h1>
            </span>
          </div>
          <div id="shame">
            <h2 className="FAQ">How do I find auto body shops near me?</h2>
            <span id="tab">
              <h1>+</h1>
            </span>
          </div>
          <div id="fame">
            <h2 className="FAQ">Genuine spare parts during car repair?</h2>
            <span id="tab">
              <h1>+</h1>
            </span>
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};
export default Home;

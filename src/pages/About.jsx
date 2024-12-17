import Header from "../Components/Header";
import Footer from "../Components/Footer";
import img1 from "../img/Image (3).png";
import img2 from "../img/Icon.jpg";
import img3 from "../img/Icon (1).jpg";
import img4 from "../img/Icon (2).jpg";
import img5 from "../img/Person 1.png";
import img6 from "../img/Steps Right.png";
import img7 from "../img/Person 2.jpg";
import img8 from "../img/Person 3.png";
import img9 from "../img/Person 4.png";
import img10 from "../img/Person 5.png";
import img11 from "../img/Person 6.png";
import Mnm from "../Components/mnm";
import Stats from "../Components/stats";
import Touch from "../Components/Touch";

const About = () => {
  return (
    <div>
      <Header />
      <section className="sec12">
        <img src={img1} alt="top" />
        <div id="about1">
          <h1>About us</h1>
          <p>
            We are a global brand in auto repair and diagnosis of vehicles. <br /> We give quality satisfaction to our clients worldwide.
          </p>
          <span>Book a service</span>
        </div>
      </section>
      <section className="sec22">
        <div id="sam">
          <h1>We Provide Expert Service <br/> and aim to have a long term<br/> with you</h1>
          <p>We provide a full range of front end mechanical repairs for <br/>all makes and models of cars,no matter</p>
        <Mnm />
        </div>
        <div id="imge">
          <img src={img6} alt="" />
        </div>
      </section>
      <section className="sec32">
        <div id="soc">
          <h1>Serve our customers<br/> and always deliver the <br/> customer service</h1>
          </div>
        <div id="tbt">
          <h1>To be the world's most<br /> eader in automotive<br /> business solutions.</h1>
          </div>
        <div id="wvt">
          <h1>We value the sevice we <br/>provide and our loyal <br/> returning customers.</h1>
          </div>
      </section>
      <section className="sec42">
        <h1>Service we provide to our<br /> valued customers</h1>
        <div id="trap">
        <div id="triplets">
          <img src={img2} alt="Cs" />
          <h2>Convenient Service</h2>
          </div>
        <div id="triplets">
          <img src={img3} alt="Em" />
          <h2>Expert Mechanics</h2>
        </div>
        <div id="triplets">
          <img src={img4} alt="Tp" />
          <h2>Transparent Pricing</h2>
        </div>
        </div>
        <Stats />
      </section>
      <section className="sec52">
        <div id="team">
          <img src={img5} alt="" />
          <img src={img7} alt="" />
          <img src={img8} alt="" />
          <img src={img9} alt="" />
          <img src={img10} alt="" />
          <img src={img11} alt="" />
        </div>
      </section>
      <Touch />
      <Footer />
    </div>
  );
};
export default About;

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import img1 from "../img/oZOb6z2hWTU.png";
import img2 from "../img/body work.png";
import img3 from "../img/engine repair.png";
import img5 from "../img/battery.png";
import img6 from "../img/car diagostics.png";
import img9 from "../img/auto.png";
import img10 from "../img/Checkmark.png";
import img11 from "../img/section3.1.png";
import img12 from "../img/section3.2.png";
import img13 from "../img/section4.1.png";
import img14 from "../img/section4.2.png";
import img15 from "../img/Arrow.png";
import Touch from "../Components/Touch";

const Services = () => {
  return (
    <div>
      <Header />
      <section className="sec11">
        <img src={img1} alt="top" />
        <div id="services1">
          <h1>Our services</h1>
          <p>
            
          </p>
          <span>Book a service</span>
        </div>
      </section>
      <section className="sec21">
        <div id="auto">
          <span id="auto1">
            <img src={img9} alt="auto" />
          </span>
          <h1>Auto Diagonistics</h1>
          <span id="sea">
            <p>See Service details</p>
            <img src={img15} alt="see more" />
          </span>
        </div>
        <div id="serv2">
          <span id="sef">
            <img src={img6} alt="Auto Diagnostics" />
            <h3> Auto Diagnostics</h3>
          </span>
          <span id="sef">
            <img src={img3} alt="engine repair" />
            <h3>Engine Repair</h3>
          </span>
          <span id="sef">
            <img src={img2} alt="Body work" />
            <h3>Body work</h3>
          </span>
          <span id="sef">
            <img src={img5} alt="Batteries" />
            <h3>Batteries</h3>
          </span>
          <span id="sef">
            <img src={img6} alt="Car wash" />
            <h3>Car Wash</h3>
          </span>
          <span id="sef">
            <img src={img3} alt="Ac Repair" />
            <h3>Ac Repair</h3>
          </span>
        </div>
      </section>
      <section id="sec31">
        <div id="xelf">
          <h1>
            How we work and the <br /> process we follow
          </h1>
          <div id="wen">
            <img src={img10} alt="check" />
            <h4>
              Through True rich attended does not end <br /> his mother since
            </h4>
          </div>
          <div id="wen">
            <img src={img10} alt="check" />
            <h4>
              Through True rich attended does not end <br /> his mother since
            </h4>
          </div>
          <div id="wen">
            <img src={img10} alt="check" />
            <h4>
              Through True rich attended does not end <br /> his mother since
            </h4>
          </div>
        </div>
        <div id="ten">
          <img src={img11} alt="" />
          <img src={img12} alt="" />
        </div>
      </section>
      <section className="sec41">
        <div id="ken">
          <img src={img13} alt="" />
          <img src={img14} alt="" />
        </div>
        <div id="fen">
         
          <h1 className="car">
            Diagnose Car Problems If <br /> You Don't Know Much <br /> About
            Cars
          </h1>
          
          <p className="diag">
             Diagnosing car problems can be challenging without extensive knowledge, but effective strategies
            include observing symptoms like unusual noises or warning lights, researching common issues for your
            make and model.
          </p>
          <span  className="book">Book a service</span>
        </div>
      </section>
      <section className="sec5">
        <Touch />
      </section>
      <Footer />
    </div>
  );
};
export default Services;

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import img2 from "../img/black head lights.png";
import img3 from "../img/tail lights.png";
import img4 from "../img/tire washing.png";
import img5 from "../img/head light.png";
import img6 from "../img/meter.png";
import img7 from "../img/steering wheel.png";
import img8 from "../img/tools.png";
import img9 from "../img/tires.png";
import img10 from "../img/car interior.png";
import img11 from "../img/car exterior.png";
import Touch from "../Components/Touch";
import arrow from "../img/Arrow.png";

const Blog = () => {
  return (
    <>
      <Header />
      <section className="first">
        <div id="f1">
      <h1>Our Blog</h1>
        </div>
      <div id="trending" >
     <h3>TRENDING</h3>
     <h1>Diagnose Car Problems If You <br />Don't Know Much About Cars</h1>
     <p>We provide a full range of front end mechanical repairs for all makes and <br/>models of cars no matter the cause it includes. We provide full <br/>range of front end mechanical.</p>
     <div>
     <span>send more</span>
     <p>Posted on August 15th 2024</p>
     </div>
      </div>
      </section>
      <section className="second">
        <div id="BL">
          <img id="btl" src={img2} alt="black tail lights" />
          <p>Posted on August 15th 2024</p>
          <h1>Should I buy a New Car or Lease a New Car in 2024</h1>
          <p>We provide a full range of front end mechanical repairs for all <br/> makes and models of cars no matter the cause it includes. <br/> We provide full range of front end mechanical.</p>
          <span>Read more <img src={arrow} alt="" /></span>
        </div>
        <div id="column">
          <span id="bros">
            <img src={img3} alt="" />
            <span>
            <h2>Get an Awesome Number Plate<br/> for Your New Car</h2>
            <p>Posted on August 15th 2024</p>
            </span>
          </span>
          <span id="bro">
            <img src={img4} alt="" />
            <span>
            <h2>Would you Let a Robot Drive your<br/>Car? Our AI Future</h2>
            <p>Posted on August 15th 2024</p>
            </span>
          </span>
          <span id="bros">
            <img src={img5} alt="" />
            <span>
            <h2>Will Electric Technology Soon <br/>Rule The Road?</h2>
            <p>Posted on August 15th 2024</p>
            </span>
          </span>
        </div>
      </section>
      <section className="thirdi">
          <div id="thirdi">
          <span id="siblings">
          <img src={img6} alt="" />
          <p>Posted on August 15th 2024</p>
          <h1>5 Genius Car Accessories<br/> You Should Never Drive<br/> Without</h1>
          </span>
          <span id="siblings">
            <img src={img7} alt="" />
            <p>Posted on August 15th 2024</p>
            <h1>5 Genius Car Accessories<br/> You Should Never Drive<br/> Without</h1>
          </span>
          <span id="siblings">
            <img src={img8} alt="" />
            <p>Posted on August 15th 2024</p>
            <h1>We provide blow straight<br/> past it with the wheels<br/> skidding</h1>
            <p>We provide a full range of front end mechanical <br />repairs for  all makes and models of cars no matter <br /> the cause it includes. We provide full range of front <br /> end mechanical.</p>
          </span>
          <span id="siblings">
            <img src={img9} alt="" />
            <p>Posted on August 15th 2024 </p>
            <h1>We provide blow straight<br/> past it with the wheels<br/> skidding</h1>
            <p>We provide a full range of front end mechanical <br />repairs for  all makes and models of cars no matter <br /> the cause it includes. We provide full range of front <br /> end mechanical.</p>
          </span>
          <span id="siblings">
            <img src={img10} alt="" />
            <p>Posted on August 15th 2024</p>
            <h1>5 Genius Car Accessories<br/> You Should Never Drive<br/> Without</h1>
          </span>
          <span id="siblings">
            <img src={img11} alt="" />
            <p>Posted on August 15th 2024</p>
            <h1>5 Genius Car Accessories<br/> You Should Never Drive<br/> Without</h1>
            </span>

          </div>
      </section>
      <Touch/>
      <Footer />
    </>
  );
};
export default Blog;

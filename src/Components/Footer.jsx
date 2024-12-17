import {Link} from "react-router-dom";
import img1 from "../img/Negative.png";
import img2 from "../img/Negative1.png";
import img3 from "../img/Negative2.png";
import img4 from "../img/Negative3.png";



const Footer = () => {
    return (
        <section className="footer">
            <div id="footer">
                <div id="touchs">
                    <h1>Get in touch with us <br /> for your service</h1>
                    <div id="socials">
                        <img src={img1} alt="" />
                        <img src={img4} alt="" />
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                    </div>
                </div>
                <div id="infofo">
                    <span id="help">
                        <h3>Help Line Number</h3>
                        <h1>09023613664</h1>
                    </span>
                    <span id="add">
                        <h1>Address</h1>
                        <address>No 6 Olayemi Street, Ikate, Surulere, Lagos.</address>
                    </span>
                    <span id="ope">
                        <h3>We are open</h3>
                        <h1>Monday to Friday from 9.00 AM to 10.00 AM</h1>
                    </span>

                </div>
            </div>
            <main id="head2">
        <h4> Finsweet Autos</h4>
        <nav id="nav2">
          <div id="lin6">
          <Link id="tag" to ='/' ><span>Home</span></Link> 
          <Link id="tag" to='/about'><span>About Us</span></Link> 
          <Link id="tag" to='/service'><span>Service</span></Link> 
          <Link id="tag" to='/blog'><span>Blog</span></Link> 
          <Link id="tag" to='/contact'><span>Contact</span></Link> 
          </div>
        </nav>
        <div className="tact5">
        <p>@ Copyright Finsweet AUTOS 2024</p>
        </div>
      </main>
        </section>
    );
}
export default Footer; 
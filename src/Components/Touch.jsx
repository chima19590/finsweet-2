import img19 from "../img/car1.png";
import img20 from "../img/battery wire.png";
export default function Touch(){
    return(
        <section className="sec5">
        <div id="touch">
          <img src={img19} alt="car" id="car" />
          <div id="box">
            <h3>
              Get in touch with us for <br /> your service related query
            </h3>
            <p>Contact us</p>
          </div>
          <img src={img20} alt="wire" id="wire" />
        </div>
      </section>
    );
}

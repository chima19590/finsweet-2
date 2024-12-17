import {Link} from "react-router-dom";
import img1 from '../img/1.png';

const Header = () => {
    return (
      <main id="header">
        <h4> Finsweet</h4>
        <nav id="nav">
          <div id="lin">
          <Link id="tag" to ='/'>Home</Link> 
          <Link id="tag" to='/about'>About Us</Link> 
          <Link id="tag" to='/service'>Service</Link> 
          <Link id="tag" to='/blog'>Blog</Link> 
          <Link id="tag" to='/contact'>Contact</Link> 
          </div>
        <div className="tact">
          <img src= {img1} alt="phone"/>
          <div>
          <h5>Road Assistance</h5>
          <h3>09023613664</h3>
          </div>
        </div>
        <div>
          <Link id="tag" to="/Login">Login</Link>
        </div>
        </nav>
      </main>
    );
}
export default Header;
import Header from "../Components/Header";
import { Link } from "react-router-dom";

export default function Login(){
    return(
        <>
        <Header />
        <section className="contain">
        <div className="login">
        <input type="text" name="email" id="l-email" placeholder="Enter your email"/>
        <input type="text" name="password" id="l-password" placeholder="Enter your password"/>
        <div id="check">
        <input type="checkbox" name="checkbox" id="checkbox_id" value="value" />
        <label for="checkbox_id">Remember me</label>
        <h4>Forgot password?</h4>
        </div>
        <input type="submit" id="submit" value="Submit" />
        <div id="back">
        <h3>Not a member?</h3>
        <Link to="/register" id="reg">Register</Link>
        </div>
        </div>
        </section>
        </>
    );
}
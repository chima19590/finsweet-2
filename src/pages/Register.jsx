import Header from "../Components/Header";

export default function Register (){
    return(
        <>
        <Header />
        <section className="register">
        <div id="p-register">
            
        <h1>Registration Form</h1>
        <div id="first-i">
        <input type="text" name="" id="s-input" placeholder="Enter your first name"/>
        <input type="text" name="" id="s-input" placeholder="Enter your last name"/>

        </div>
       <div id="second-i">
       <fieldset id="s-inputs">
        <legend>Date Of Birth</legend>
            <input type="date" name="dob" />
        </fieldset>
        <select name="gender" id="s-input">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
        </select>
       </div>
       <div id="emtel">
        <input type="email" name=""  id="s-input" placeholder="Enter your e-mail"/>
        <input type="tel" name="" id="s-input" placeholder="Enter your phone number"/>
       </div>
        <select name="Car brand" id="s-input">
        <option value="Toyota Camry">Toyota Camry</option>
<option value="Toyota Corolla">Toyota Corolla</option>
<option value="Toyota RAV4">Toyota RAV4</option>
<option value="Toyota Highlander">Toyota Highlander</option>
<option value="Toyota Tacoma">Toyota Tacoma</option>
<option value="Toyota Tundra">Toyota Tundra</option>
<option value="Toyota Prius">Toyota Prius</option>
<option value="Toyota Yaris">Toyota Yaris</option>

<option value="Honda Accord">Honda Accord</option>
<option value="Honda Civic">Honda Civic</option>
<option value="Honda CR-V">Honda CR-V</option>
<option value="Honda Pilot">Honda Pilot</option>
<option value="Honda Fit">Honda Fit</option>
<option value="Honda HR-V">Honda HR-V</option>
<option value="Honda Odyssey">Honda Odyssey</option>
<option value="Honda Ridgeline">Honda Ridgeline</option>

<option value="Ford Mustang">Ford Mustang</option>
<option value="Ford F-150">Ford F-150</option>
<option value="Ford Explorer">Ford Explorer</option>
<option value="Ford Escape">Ford Escape</option>
<option value="Ford Fusion">Ford Fusion</option>
<option value="Ford Edge">Ford Edge</option>
<option value="Ford Expedition">Ford Expedition</option>
<option value="Ford Ranger">Ford Ranger</option>

<option value="Chevrolet Silverado">Chevrolet Silverado</option>
<option value="Chevrolet Equinox">Chevrolet Equinox</option>
<option value="Chevrolet Malibu">Chevrolet Malibu</option>
<option value="Chevrolet Traverse">Chevrolet Traverse</option>
<option value="Chevrolet Tahoe">Chevrolet Tahoe</option>
<option value="Chevrolet Suburban">Chevrolet Suburban</option>
<option value="Chevrolet Camaro">Chevrolet Camaro</option>
<option value="Chevrolet Impala">Chevrolet Impala</option>

<option value="BMW 3 Series">BMW 3 Series</option>
<option value="BMW 5 Series">BMW 5 Series</option>
<option value="BMW 7 Series">BMW 7 Series</option>
<option value="BMW X3">BMW X3</option>
<option value="BMW X5">BMW X5</option>
<option value="BMW X7">BMW X7</option>
<option value="BMW Z4">BMW Z4</option>
<option value="BMW M3">BMW M3</option>

<option value="Mercedes-Benz C-Class">Mercedes-Benz C-Class</option>
<option value="Mercedes-Benz E-Class">Mercedes-Benz E-Class</option>
<option value="Mercedes-Benz S-Class">Mercedes-Benz S-Class</option>
<option value="Mercedes-Benz GLA">Mercedes-Benz GLA</option>
<option value="Mercedes-Benz GLC">Mercedes-Benz GLC</option>
<option value="Mercedes-Benz GLE">Mercedes-Benz GLE</option>
<option value="Mercedes-Benz GLS">Mercedes-Benz GLS</option>
<option value="Mercedes-Benz A-Class">Mercedes-Benz A-Class</option>

<option value="Audi A3">Audi A3</option>
<option value="Audi A4">Audi A4</option>
<option value="Audi A6">Audi A6</option>
<option value="Audi A8">Audi A8</option>
<option value="Audi Q3">Audi Q3</option>
<option value="Audi Q5">Audi Q5</option>
<option value="Audi Q7">Audi Q7</option>
<option value="Audi Q8">Audi Q8</option>

<option value="Volkswagen Golf">Volkswagen Golf</option>
<option value="Volkswagen Passat">Volkswagen Passat</option>
<option value="Volkswagen Jetta">Volkswagen Jetta</option>
<option value="Volkswagen Tiguan">Volkswagen Tiguan</option>
<option value="Volkswagen Atlas">Volkswagen Atlas</option>
<option value="Volkswagen Beetle">Volkswagen Beetle</option>
<option value="Volkswagen Arteon">Volkswagen Arteon</option>
<option value="Volkswagen Polo">Volkswagen Polo</option>

<option value="Nissan Altima">Nissan Altima</option>
<option value="Nissan Sentra">Nissan Sentra</option>
<option value="Nissan Maxima">Nissan Maxima</option>
<option value="Nissan Rogue">Nissan Rogue</option>
<option value="Nissan Pathfinder">Nissan Pathfinder</option>
<option value="Nissan Murano">Nissan Murano</option>
<option value="Nissan Titan">Nissan Titan</option>
<option value="Nissan Leaf">Nissan Leaf</option>

<option value="Hyundai Elantra">Hyundai Elantra</option>
<option value="Hyundai Sonata">Hyundai Sonata</option>
<option value="Hyundai Tucson">Hyundai Tucson</option>
<option value="Hyundai Santa Fe">Hyundai Santa Fe</option>
<option value="Hyundai Kona">Hyundai Kona</option>
<option value="Hyundai Palisade">Hyundai Palisade</option>
<option value="Hyundai Veloster">Hyundai Veloster</option>
<option value="Hyundai Accent">Hyundai Accent</option>

<option value="Kia Optima">Kia Optima</option>
<option value="Kia Sorento">Kia Sorento</option>
<option value="Kia Sportage">Kia Sportage</option>
<option value="Kia Soul">Kia Soul</option>
<option value="Kia Telluride">Kia Telluride</option>
<option value="Kia Forte">Kia Forte</option>
<option value="Kia Stinger">Kia Stinger</option>
<option value="Kia Rio">Kia Rio</option>

<option value="Subaru Outback">Subaru Outback</option>
<option value="Subaru Forester">Subaru Forester</option>
<option value="Subaru Impreza">Subaru Impreza</option>
<option value="Subaru WRX">Subaru WRX</option>
<option value="Subaru Crosstrek">Subaru Crosstrek</option>
<option value="Subaru Ascent">Subaru Ascent</option>
<option value="Subaru Legacy">Subaru Legacy</option>
<option value="Subaru BRZ">Subaru BRZ</option>

<option value="Mazda Mazda3">Mazda Mazda3</option>
<option value="Mazda Mazda6">Mazda Mazda6</option>
<option value="Mazda CX-3">Mazda CX-3</option>
<option value="Mazda CX-5">Mazda CX-5</option>
<option value="Mazda CX-9">Mazda CX-9</option>
<option value="Mazda MX-5 Miata">Mazda MX-5 Miata</option>
<option value="Mazda CX-30">Mazda CX-30</option>

<option value="Tesla Model S">Tesla Model S</option>
<option value="Tesla Model 3">Tesla Model 3</option>
<option value="Tesla Model X">Tesla Model X</option>
<option value="Tesla Model Y">Tesla Model Y</option>
<option value="Tesla Cybertruck">Tesla Cybertruck</option>
<option value="Tesla Roadster">Tesla Roadster</option>

<option value="Volvo S60">Volvo S60</option>
<option value="Volvo S90">Volvo S90</option>
<option value="Volvo XC40">Volvo XC40</option>
<option value="Volvo XC60">Volvo XC60</option>
<option value="Volvo XC90">Volvo XC90</option>
<option value="Volvo V60">Volvo V60</option>
<option value="Volvo V90">Volvo V90</option>

<option value="Lexus ES">Lexus ES</option>
<option value="Lexus LS">Lexus LS</option>
<option value="Lexus RX">Lexus RX</option>
<option value="Lexus NX">Lexus NX</option>
<option value="Lexus GX">Lexus GX</option>
<option value="Lexus LX">Lexus LX</option>
<option value="Lexus IS">Lexus IS</option>
<option value="Lexus RC">Lexus RC</option>

<option value="Acura ILX">Acura ILX</option>
<option value="Acura TLX">Acura TLX</option>
<option value="Acura RLX">Acura RLX</option>
<option value="Acura RDX">Acura RDX</option>
<option value="Acura MDX">Acura MDX</option>
<option value="Acura NSX">Acura NSX</option>

<option value="Jeep Wrangler">Jeep Wrangler</option>
<option value="Jeep Cherokee">Jeep Cherokee</option>
<option value="Jeep Grand Cherokee">Jeep Grand Cherokee</option>
<option value="Jeep Renegade">Jeep Renegade</option>
<option value="Jeep Compass">Jeep Compass</option>
<option value="Jeep Gladiator">Jeep Gladiator</option>

<option value="Porsche 911">Porsche 911</option>
<option value="Porsche Cayenne">Porsche Cayenne</option>
<option value="Porsche Macan">Porsche Macan</option>
<option value="Porsche Panamera">Porsche Panamera</option>
<option value="Porsche Taycan">Porsche Taycan</option>
<option value="Porsche Boxster">Porsche Boxster</option>
<option value="Porsche Cayman">Porsche Cayman</option>

        </select>
        <input type="submit" value="Submit" id="s-inputr"/>
        </div>
        </section>

        </>
    );
}
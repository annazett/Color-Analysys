import colourtheoryhgj from "../images/Colourtheoryhgj.005.png";
import React from "react";
import './welcome.css'

const Welcome = ({question}) => (
    <section id="main">
        <div className="main-width clearfix">
            <div className="images">
                <img src={colourtheoryhgj}/>
            </div>
            <div className="about">
                <h1>ANALIZA KOLORYSTYCZNA</h1><br/>
                <p><b>Czy wiesz, że...?</b><br/></p>
                <p>
                    Na podstawie tego, jakiego koloru są Twoja cera, oczy i włosy można
                    określić jakie barwy najlepiej podkreślą Twoją urodę. Dzięki przyporządkowaniu
                    swojego typu urody do jednej z czterech pór roku poznajesz optymalną dla siebie
                    paletę kolorów. Od tej pory wiesz, jakie kosmetyki kolorowe będą najlepsze dla
                    Twojej cery, czego unikać na sklepowych wieszakach i jakie dodatki sprawią, że
                    efekt Twojej stylizacji będzie oszałamiający.</p><br/>

                <button className="doTestButton" onClick={question}>ZRÓB TEST</button><br/><br/>
                <p>... i dowiedz się jakim TYPEM KOLORYSTYCZNYM JESTEŚ!</p>
            </div>
        </div>
    </section>
);



export default Welcome;
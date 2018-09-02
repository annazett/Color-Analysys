import colourtheoryhgj from "../images/fourSeasons.png";
import React from "react";
import './welcome.css';
import { NavLink } from 'react-router-dom';

const Welcome = ({question}) => (
    <section id="main">
        <div className="main-width clearfix">
            <div className="images">
                <img src={colourtheoryhgj}/>
            </div>
            <div className="about">
                <h1>ANALIZA</h1>
                <h1><span style={{color: '#00FFFF'}}>K</span><span style={{color: '#A52A2A'}}>O</span><span style={{color: '#6495ED'}}>L</span><span style={{color: '#556B2F'}}>O</span>R<span style={{color: '#FF1493'}}>Y</span><span style={{color: '#DAA520'}}>S</span><span style={{color: '#7CFC00'}}>T</span><span style={{color: '#778899'}}>Y</span><span style={{color: '#191970'}}>C</span><span style={{color: '#808000'}}>Z</span><span style={{color: '#FA8072'}}>N</span><span style={{color: '#D2B48C'}}>A</span></h1><br/>
                <h2>znajdź swój typ!</h2><br/>
                {/*<p><b>Czy wiesz, że...?</b><br/></p>*/}
                {/*<p>*/}
                    {/*Na podstawie tego, jakiego koloru są Twoja cera, oczy i włosy można*/}
                    {/*określić jakie barwy najlepiej podkreślą Twoją urodę. Dzięki przyporządkowaniu*/}
                    {/*swojego typu urody do jednej z czterech pór roku poznajesz optymalną dla siebie*/}
                    {/*paletę kolorów. Od tej pory wiesz, jakie kosmetyki kolorowe będą najlepsze dla*/}
                    {/*Twojej cery, czego unikać na sklepowych wieszakach i jakie dodatki sprawią, że*/}
                    {/*efekt Twojej stylizacji będzie oszałamiający.</p><br/>*/}


                <NavLink to="/question/1"><button className='doTestButton'>ZRÓB TEST</button></NavLink><br/><br/><br/><br/>

                <p>... i dowiedz się jakim TYPEM KOLORYSTYCZNYM JESTEŚ!</p>
            </div>
        </div>
    </section>
);



export default Welcome;
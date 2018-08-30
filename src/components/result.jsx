import React from "react";
import wiosna from "../images/wiosna.png";
import lato from "../images/lato.png";
import jesien from "../images/jesien.png";
import zima from "../images/zima.png";
import wiosna_colors from "../images/wiosna_colors.png";
import lato_colors from "../images/lato_colors.png";
import jesien_colors from "../images/jesien_colors.png";
import zima_colors from "../images/zima_colors.png";
import Question from "./question";
import './result.css'


const getMostFrequentAnswerType = results => {
    console.log(results);

    const types = {};
    results.forEach(result => {
        types[result.answerType] = types[result.answerType] || 0;
        types[result.answerType] ++;
    });

    console.log(types); //{"jesień":2,"wiosna":4,"lato":3}

    const sorted = Object.entries(types).sort((arr1, arr2) => {
       return arr1[1] - arr2[1];
    });

    // return sorted;
    const lastElement = sorted.length-1;
    console.log("sorted", sorted);

    return (sorted[lastElement] || [])[0];


};

const renderResult = (result) => {

    console.log("result", result);

    if (result === 'wiosna') {
        return (
            <div className='wiosna'>
                <img src={wiosna} />
                <img src={wiosna_colors} />
                <h1>WIOSNA</h1>
                <h2>clear, light, warm</h2>
                <p>
                    Skóra ma delikatny złocisty lub brzoskwiniowy odcień, często bywa zarumieniona, ale mimo to stosunkowo łatwo się opala, a piegi są w złocistym odcieniu
                    Oczy mają najczęściej kolor zielony lub niebieski oraz często źrenica jest oddzielona od tęczówki złotą lub złotobrązową obwódką
                    Włosy są jasne (w kolorze słomy, miodu lub platyny) lub brązowe o ciepłym rdzawym lub złotym połysku
                </p>
                <button className='comeBackButton' onClick="window.history.go(-1); return false;" >ZRÓB JESZCZE RAZ</button>
            </div>
        )
    } else if (result === 'lato') {
        return (
            <div className='lato'>
                <img src={lato} />
                <img src={lato_colors} />
                <h1>LATO</h1>
                <p>
                    Skóra jest albo blada i porcelanowa z wyraźnie przebłyskującymi naczynkami o zimnym odcieniu, albo oliwkowa o jasnym, chłodnym odcieniu
                    Piegi są w kolorze szarym lub szarobrunatnym
                    Oczy wydają się mieć popielatą oprawę i są niebieskie, zielone lub szare
                    Włosy są najczęściej w popielatym kolorze lub brązowym z wyraźnym popielatym połyskiem
                </p>
                <button className='comeBackButton' onClick="window.history.go(-1); return false;" >ZRÓB JESZCZE RAZ</button>
            </div>
        )
    } else if (result === "jesien") {
        return (
            <div className='jesien'>
                <img src={jesien} />
                <img src={jesien_colors} />
                <h1>JESIEŃ</h1>
                <p>
                    Skóra jest jasna o ciepłej barwie (w kolorze kości słoniowej, w złocisto-beżowym lub brzoskwiniowym odcieniu) oraz ma skłonność do powstawania piegów w rudym kolorze
                    Opalanie często kończy się zaczerwienieniem skóry
                    Oczy mają ciepłe barwy (topaz, brąz, złoty brąz, zieleń) lub złotawe plamki
                    Włosy mają ciepłą barwę z wyraźnym złotym pobłyskiem: od blondu, przez kasztanowy i marchewkowy aż po ciepły brąz
                </p>
                <button className='comeBackButton' onClick="window.history.go(-1); return false;" >ZRÓB JESZCZE RAZ</button>


            </div>
        )
    } else {
        return (
            <div className='zima'>
                <div className='clearfix'>
                <img src={zima} />

                <h1>ZIMA</h1>
                <p>
                    Skóra jest bardzo jasna, porcelanowa i sprawia wrażenie przezroczystej (w wersji północnej) lub ma zdecydowany chłodny odcień oliwki (w wersji południowej); rzadko pojawia się na niej rumieniec
                    Posiadaczka tej urody może mieć problemy z opalaniem się
                    Oczy mają ciemną oprawę i błyszczą intensywnym blaskiem; najczęściej są w zdecydowanych kolorach: zielonym, błękitnym, orzechowym lub ciemnobrązowym
                    Włosy są ciemne, ze zdecydowanym granatowym lub popielatym połyskiem
                </p>

                    <img src={zima_colors} />

                <button className='comeBackButton'>ZRÓB JESZCZE RAZ</button>
            </div>
            </div>
        )
    };
};





const Result = (props) => (

    <section id="result">

        { renderResult(getMostFrequentAnswerType(props.results)) }

    </section>

);




export default Result;
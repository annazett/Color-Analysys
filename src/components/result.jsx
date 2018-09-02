import React from "react";
import wiosna from "../images/wiosna.png";
import lato from "../images/lato.png";
import jesien from "../images/jesien.png";
import zima from "../images/zima.png";
import wiosna_colors from "../images/wiosna_colors.png";
import lato_colors from "../images/lato_colors.png";
import jesien_colors from "../images/jesien_colors.png";
import zima_colors from "../images/zima_colors1.png";
import Question from "./question";
import './result.css'
import {NavLink} from "react-router-dom";


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
            <section id="main">
                <div className="main-width clearfix">
                    <div className="spring">
                        <img className="springFoto" src={wiosna}/>
                    </div>
                    <div className="aboutSpring">
                        <h1><b>WIOSNA</b></h1>
                        <h2>jasna delikatna ciepła</h2><br/>
                        <div className="springDescription">

                            <h3 className='yourColors'>CO POWINNA NOSIĆ PANI WIOSNA?</h3><br/>

                            <p>Pani Wiosna najkorzystniej będzie wyglądała w kolorach występujących w naturalnym krajobrazie
                                o tej porze roku. Obserwuj w jakich barwach przyroda budzi się po zimie. Jaki kolor mają
                                pierwsze pączki na drzewach, młoda trawa, w jakich odcieniach kwitną drzewa owocowe. Czerp
                                kolorystykę swoich ubrań z otaczającej Cię przyrody. Twoją urodę najlepiej uwydatnią świeże,
                                czyste i soczyste kolory w ciepłych odcieniach. Uwielbiasz żółty? Pomyśl o żółtych tulipanach
                                i żonkilach. Nie zapomnij o zieleniach, jesteś stworzona, by je nosić. Dobrze będziesz
                                wyglądać w zieleni lipy, trawy, niedojrzałych jabłek, jak również w żółtozielonych kolorach.
                                Nie zapomnij też o brązach, beżach, turkusach oraz morelowych i łososiowych odcieniach.
                                Doskonale podkreślą twoje naturalne piękno.</p><br/>

                            <p className='yourColors'>TWOJE KOLORY</p><br/>
                            <img className="springColors" src={wiosna_colors} />
                            <NavLink to="/"><button className='comeBackButton'>JESZCZE RAZ</button></NavLink>
                        </div>
                    </div>
                </div>
            </section>
        )
    } else if (result === 'lato') {
        return (
            <section id="main">
                <div className="main-width clearfix">
                    <div className="summer">
                        <img className="summerFoto" src={lato}/>
                    </div>
                    <div className="aboutSummer">
                        <h1><b>LATO</b></h1>
                        <h2>jasne delikatne stonowane</h2><br/>
                        <div className="summerDescription">

                            <h3 className='yourColors'>CO POWINNA NOSIĆ PANI LATO?</h3><br/>

                            <p>Pani Lato jest delikatnym i chłodnym typem urody, co sprawia, że jej skóra wydaje się
                                niezwykle szlachetna i krucha. Kolory ubrań, które najkorzystniej będą podkreślały
                                urodę Pani Lata to kolory występujące w naturze o tej porze roku. Zwróć uwagę jak
                                zmienia się trawa z wiosennej soczystej zieleni na przytłumioną, spaloną słońcem.
                                Latem łąka leśnych kwiatów jest różnokolorowa, ale wszystkie barwy są rozbielone,
                                pastelowe, wypłowiałe od ostrego słońca, jakby przypudrowane. Uwielbiasz żółty?
                                Wybierz bluzkę w kolorze cytrynowym. Nie zapomnij o niebieskim,
                                niemalże we  wszystkich jego odcieniach będziesz wyglądać dobrze. Podobnie w
                                rozbielonych odcieniach fioletów. A może kochasz zielenie? Wybierz odcienie o
                                niebieskim zabarwieniu – morski, zieleń butelkową i szarą zieleń.</p><br/>

                            <h3 className='yourColors'>TWOJE KOLORY</h3><br/>
                            <img className="summerColors" src={lato_colors} />
                            <NavLink to="/"><button className='comeBackButton'>JESZCZE RAZ</button></NavLink>
                        </div>
                    </div>
                </div>
            </section>
        )
    } else if (result === "jesień") {
        return (
            <section id="main">
                <div className="main-width clearfix">
                    <div className="autumm">
                        <img className="autummFoto" src={jesien}/>
                    </div>
                    <div className="aboutAutumm">
                        <h1><b>JESIEŃ</b></h1>
                        <h2>delikatna ciepła głęboka</h2><br/>
                        <div className="autummDescription">

                            <h3 className='yourColors'>CO POWINNA NOSIĆ PANI JESIEŃ?</h3><br/>
                            <p>Jesienne kolory jesieni są ciepłe i zgaszone, w otoczeniu których rozkwita Pani Jesień.
                                Zainspiruj się krajobrazem występującym w przyrodzie o tej porze roku. Pomyśl o Polskiej
                                Złotej Jesieni, przebarwionych na żółto i czerwono liściach w parku, spadających kasztanach,
                                zgniłej zieleni. Marzy Ci się zielony sweter? Wybierz w kolorze khaki lub oliwkowym.
                                Chciałabyś założyć coś czerwonego? Najlepsza będzie dla Ciebie ceglana czerwień. Jesteś
                                jedynym typem urody który przepięknie wygląda w pomarańczu. Pamiętaj o nim – jeśli nie
                                możesz do pracy nosić ubrań w tym kolorze, przemyć go w dodatkach. Zamiast czerni wybieraj
                                brąz, zamiast szarego – beż, białe bluzki i topiki zastąp ecru i odcieniem kości słoniowej.
                                Nie zapomnij też o rudościach, intensywnych żółtych i ciemnych turkusach, które podkreślą
                                twoją urodę.</p><br/>

                            <h3 className='yourColors'>TWOJE KOLORY</h3><br/>
                            <img className="autummColors" src={jesien_colors} />
                            <NavLink to="/"><button className='comeBackButton'>JESZCZE RAZ</button></NavLink>
                        </div>
                    </div>
                </div>
            </section>
        )
    } else {
        return (

            <section id="main">
                <div className="main-width clearfix">
                    <div className="winter">
                        <img className="winterFoto" src={zima}/>
                    </div>
                    <div className="aboutWinter">
                        <h1><b>ZIMA</b></h1>
                        <h2>czysta głęboka zimna</h2><br/>
                        <div className="winterDescription">

                            <h3 className='yourColors'>CO POWINNA NOSIĆ PANI ZIMA?</h3><br/>
                            <p>Krajobraz zimą jest kontrastowy. Na tle białego śniegu wiecznie zielone choinki wydają się być bardziej zielone.
                                O zachodzie słońca na niebie widoczna jest feeria barw granatowo fioletowych. W takich kolorach też najpiękniej
                                wygląda Pani Zima. Lubisz niebieski? Wybierz lodowy błękit. Masz ochotę na czerwony dodatek – pomyśl o kolorze
                                czerwonego wina, które sączysz przy kominku w długie zimowe wieczory.

                                Twój zielony to zieleń butelkowa. Dobrze będziesz wyglądać w intensywnych, chłodnych kolorach jak fuksja czy
                                kobalt. Biała bluzka? Wyłącznie w śnieżnobiałym odcieniu, zapomnij o kości słoniowej czy ecru. Jesteś
                                miłośniczką brązu? Wybierz odcień gorzkiej czekolady, który podkreśli Twoją urodę. I pamiętaj o kontrastach,
                                by Twój wizerunek był równie kontrastowy jak zimowy krajobraz.</p><br/>

                            <h3 className='yourColors'>TWOJE KOLORY</h3><br/>
                            <img className="winterColors" src={zima_colors} />
                            <NavLink to="/"><button className='comeBackButton'>JESZCZE RAZ</button></NavLink>
                        </div>
                    </div>
                </div>
            </section>
        )
    };
};





const Result = (props) => (

    <section id="result">

        { renderResult(getMostFrequentAnswerType(props.results)) }

    </section>

);




export default Result;
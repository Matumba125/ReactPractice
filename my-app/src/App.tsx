import React, {useState} from 'react';
import './App.css';
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import Rating, {RatingScoreType} from "./components/Rating/Rating";
import Accordion, {CollapsedPropsType} from "./components/Accordion/Accordion";
import OnOff from "./components/OnOff/OnOff";


function App() {

    let [ratingScore, setRatingScore] = useState<RatingScoreType>(0)

    let [collapsed, setCollapsed] = useState<CollapsedPropsType>(true)

    let [on, setOn] = useState<boolean>(false)

    return (
        <div className={'App'}>

            <UncontrolledRating  />

            <UncontrolledAccordion title={"Menu"} />

            <UncontrolledOnOff onChange={setOn} /> {on.toString()}

            <Rating score={ratingScore} onClick={setRatingScore}/>

            <Accordion title={"Boiii"} collapsed={collapsed} onClick={setCollapsed}/>

            <OnOff on={on} onClick={setOn} />
        </div>
    );
}

export default App;

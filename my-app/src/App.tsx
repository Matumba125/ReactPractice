import React, {useState} from 'react';
import './App.css';
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import Rating, {RatingScoreType} from "./components/Rating/Rating";
import Accordion, {CollapsedPropsType} from "./components/Accordion/Accordion";


function App() {

    let [ratingScore, setRatingScore] = useState<RatingScoreType>(0)

    let [collapsed, setCollapsed] = useState<CollapsedPropsType>(true)

    return (
        <div className={'App'}>

            <UncontrolledRating  />
            <UncontrolledAccordion title={"Menu"} />
            <UncontrolledAccordion title={"Not menu"} />

            <Rating score={ratingScore} onClick={setRatingScore}/>

            <Accordion title={"Boiii"} collapsed={collapsed} onClick={setCollapsed}/>

            <OnOff />
        </div>
    );
}

export default App;

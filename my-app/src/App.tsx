import React from 'react';
import './App.css';
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';

function App() {
    return (
        <div className={'App'}>
             <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends"}/>

            <UncontrolledRating  />
            <UncontrolledAccordion title={"Menu"} />
            <UncontrolledAccordion title={"Not menu"} />

            <OnOff />
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return(
        <h1>{props.title}</h1>
    );
}

export default App;

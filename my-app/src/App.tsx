import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    return (
        <div>
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            <Rating score = {3}/>
            <Accordion title={"Menu"} collapsed={true} />
            <Accordion title={"Not menu"} collapsed={false} />
            Article 2
            <Rating score = {0} />
            <Rating score = {1} />
            <Rating score = {2} />
            <Rating score = {3} />
            <Rating score = {4} />
            <Rating score = {5} />
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

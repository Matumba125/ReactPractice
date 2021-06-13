import React, {useState} from "react";

type AccordionPropsType = {
    title: string
}
type CollapsedType = true | false;


function UncontrolledAccordion(props: AccordionPropsType) {
    let [collapsed, setCollapsed] = useState<CollapsedType>(true)
    return (
        <div>
            <AccordionTitle title={props.title}/>
            <button onClick={() => setCollapsed(!collapsed)}>TOGGLE</button>
            {!collapsed && <AccordionBody/>}
        </div>

    );
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3>{props.title}</h3>
    );
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export default UncontrolledAccordion;
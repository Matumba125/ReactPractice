import React, {useState} from "react";

type PropsType = {
    onChange: (on: boolean) => void
}

function UncontrolledOnOff(props: PropsType) {
    let [on, setOn] = useState<boolean>(false)

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "white"
    };
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: !on ? "red" : "white"
    };
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red"

    };

    const clickedOn = ()=>{
        setOn(true)
        props.onChange(true)
    }

    const clickedOff = () =>{
        setOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={clickedOn}>On
            </div>
            <div style={offStyle} onClick={clickedOff}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export default UncontrolledOnOff;
import React, {useState} from "react";

export type RatingType = 0 | 1 | 2 | 3 | 4 | 5

function UncontrolledRating() {
    let [score, setScore] = useState<RatingType>(0)
    return (
        <div>
            <Star selected={score > 0} setScore={()=>{setScore(1)}} />
            <Star selected={score > 1} setScore={()=>{setScore(2)}} />
            <Star selected={score > 2} setScore={()=>{setScore(3)}} />
            <Star selected={score > 3} setScore={()=>{setScore(4)}} />
            <Star selected={score > 4} setScore={()=>{setScore(5)}} />
        </div>
    )

}

type StarPropsType = {
    selected: boolean
    setScore: () => void
}

function Star(props: StarPropsType) {
    return <span onClick={() => props.setScore()}>
        {props.selected ? <b>star </b> : "star "}
    </span>

}

export default UncontrolledRating;
import React, {useState} from "react";

export type RatingType = 0 | 1 | 2 | 3 | 4 | 5

function UncontrolledRating() {
    let [score, setScore] = useState<RatingType>(0)
    return (
        <div>
            <Star selected={score > 0}/>
            <Star selected={score > 1}/>
            <Star selected={score > 2}/>
            <Star selected={score > 3}/>
            <Star selected={score > 4}/>
            <button onClick={() => setScore(1)}>1</button>
            <button onClick={() => setScore(2)}>2</button>
            <button onClick={() => setScore(3)}>3</button>
            <button onClick={() => setScore(4)}>4</button>
            <button onClick={() => setScore(5)}>5</button>
        </div>
    )

}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    return (props.selected && <span><b>star </b></span>) || <span>star </span>

}

export default UncontrolledRating;
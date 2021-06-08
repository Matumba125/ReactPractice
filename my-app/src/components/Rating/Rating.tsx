import React from "react";

type RatingPropsType = {
    score: 0 | 1 | 2 | 3 | 4 | 5
}

export function Rating(props: RatingPropsType) {
    return  (
    <div>
        <Star selected={props.score > 0} />
        <Star selected={props.score > 1} />
        <Star selected={props.score > 2} />
        <Star selected={props.score > 3} />
        <Star selected={props.score > 4} />
    </div>
    )

}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    return  (props.selected && <span><b>star </b></span> ) || <span>star </span>

}

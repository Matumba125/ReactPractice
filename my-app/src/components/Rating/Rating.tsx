import React from "react";

export type RatingScoreType = 0 | 1 | 2 | 3 | 4 | 5

export type RatingPropsType = {
    score: RatingScoreType
    onClick: (score: RatingScoreType) => void
}

function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star selected={props.score > 0} onClick={props.onClick} score={1}/>
            <Star selected={props.score > 1} onClick={props.onClick} score={2}/>
            <Star selected={props.score > 2} onClick={props.onClick} score={3}/>
            <Star selected={props.score > 3} onClick={props.onClick} score={4}/>
            <Star selected={props.score > 4} onClick={props.onClick} score={5}/>
        </div>
    )

}

type StarPropsType = {
    selected: boolean
    score: RatingScoreType
    onClick: (score: RatingScoreType) => void
}

function Star(props: StarPropsType) {
    return <span onClick={() => props.onClick(props.score)}>
        {props.selected ? <b>star </b> : "star "}
    </span>

}

export default Rating;
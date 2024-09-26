import {numArr} from "../helper.js"

const Die = (props) => {
    return (
        <span id="die">
            <i class={`fas fa-dice-${numArr[props.side]}`}></i>
        </span>
    )
}

export default Die
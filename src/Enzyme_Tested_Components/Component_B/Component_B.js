import React, {useState} from "react"

export default (props) => {
    const [state, updateState] = useState(0)
    return (
        <button onClick={() => {
            updateState(state + 1)
        }}>{props.title}: {state}</button>
    )
}
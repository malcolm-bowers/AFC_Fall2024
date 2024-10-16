import {Button} from "@mui/material";
import * as React from "react";
import {useEffect} from "react";


export default function Counter() {
    let [value, setValue] = React.useState(0);

    useEffect(() => {
        if (value > 3) {
            setValue(0)
        } else if (value < 0) {
            setValue(3)
        }
    }, [value]);

    return (
        <div>
            <p style={{color:"red"}}>{value}</p>
            <Button onClick={() => setValue(value + 1)}>
                Increment
            </Button>
            <Button onClick={() => setValue(value - 1)}>
                Decrement
            </Button>
        </div>
    )
}
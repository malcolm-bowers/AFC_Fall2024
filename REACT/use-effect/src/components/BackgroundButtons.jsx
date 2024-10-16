import * as React from 'react';
import {Button} from "@mui/material";
import {useEffect} from "react";

export default function BackgroundButtons() {
    const [color, setColor] = React.useState("white");

    useEffect(() => {
        document.body.style.backgroundColor = color;
    }, [color])

    return (
        <div>
            <p>
                <Button onClick={() => setColor("red")}>
                    Red
                </Button>
            </p>
            <p>
                <Button onClick={() => setColor("yellow")}>
                    Yellow
                </Button>
            </p>
            <p>
                <Button onClick={() => setColor("green")}>
                    Green
                </Button>
            </p>
        </div>
    )
}
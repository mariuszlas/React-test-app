import React, { useState, useEffect } from 'react';

function Background() {

    const [color, setColor] = useState();

    useEffect(() => {
        function changeColor() {
            const num = () => { return Math.round(Math.random() * (255 - 0) + 0); }
            // value of color is set to new one to keep useEffect running
            setColor(num());
            document.body.style.backgroundColor = `rgb(${num()}, ${num()}, ${num()})`;
        };
        setTimeout(changeColor, 2000);

    }, [color])

    return (<></>)
}

export default Background;

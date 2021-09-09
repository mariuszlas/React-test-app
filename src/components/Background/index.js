import React, { useState, useEffect } from 'react';

function Background({  }) {

    const [color, setColor] = useState();

    useEffect(() => {
        function changeColor() {
            const num = () => { return Math.random() * (255 - 0) + 0; }
            setColor(num());
            document.body.style.backgroundColor = `rgb(${num()}, ${num()}, ${num()}, ${num()})`;
        };
        setTimeout(changeColor, 1000);
    }, [color])

    return (<></>)
}

export default Background;

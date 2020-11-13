import React, { useState, useEffect } from 'react';
import "../css/HelloWorld.css"




function HelloWorld({ scrollDown }) {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => {
        setOffsetY(window.pageYOffset);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        console.log(offsetY);
        return () => window.removeEventListener("scroll", handleScroll)
    }, []);


    return (
        <div className="helloWorldCont">
            <h1 className='helloWorld'  style={
                {transform: `translateY(${0.32*offsetY}px) translate(-50%, -50%)`}
            }><text className="hello">Hello</text> World!</h1>
            <img className='goDown' src="../../down_arrows.png" onClick={() => scrollDown()}/>
        </div>
    );
  }

export default HelloWorld;
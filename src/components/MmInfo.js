import React, { useState, useEffect } from 'react';
import "../css/Intro.css"




function MmInfo({ scrollDown }) {

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
        <div className="infoCont">
            <div className="row">
                <img className='mmImage' src="../../mm_photo.png"/>
                <div className="mmInfo">
                    <h1 className="mmName">Moustafa Makhlouf</h1>
                    <h3 className="cheesyTitle">I speak to computers in their language!</h3>
                    <p className="shortIntro">
                        I have experience developing full-stack software, internal development tools, and machine learning models.
                    </p>
                </div>
            </div>
            
            
        </div>
    );
  }

export default MmInfo;
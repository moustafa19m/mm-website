import React, { useState, useEffect } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
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
        <Container className="infoCont" fluid="lg">
            <Row className="row">
                {/* <Col> */}
                    <img className='mmImage mm-link' src="../../mm_photo_bg.JPG"/>
                {/* </Col> */}
                <Col className="mmInfo" xs="6">
                    <text style={{color: "white"}}>Hi, my name is </text><br/>
                    <h1 className="mmName yellowText"><strong>Moustafa Makhlouf</strong></h1>
                    
                    <h3 className="cheesyTitle">I speak to computers in their language!</h3>
                    <br/>

                    <p className="shortIntro">
                        I am a senior at <strong className="yellowText">Brown University</strong>, studying computer science Sc.B. I have experience developing full-stack software, internal development tools, and machine learning models.
                    </p>
                </Col>
            </Row>
            
            
        </Container>
    );
  }

export default MmInfo;
import React, { useState, useEffect, Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import "../css/Intro.css"




class MmInfo extends React.Component {

    // const [offsetY, setOffsetY] = useState(0);
    // const handleScroll = () => {
    //     setOffsetY(window.pageYOffset);
    // }

    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll);
    //     console.log(offsetY);
    //     return () => window.removeEventListener("scroll", handleScroll)
    // }, []);
    constructor() {
        super();
        this.state = {hidden : true};
    }

    componentWillMount() {
        setTimeout(() => {
            this.setState({hidden: false})
          }, 700);
    }


    render () {
        return (
            <Container className="infoCont" fluid="lg">
            {
                this.state.hidden ?

                <div></div>

                :
                
                    <Row className="row">
                        {/* <Col> */}
                            <img className='mmImage mm-link' src="../../mm_photo_2.png"/>
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
                

            }
            </Container>
        
        );
    }
  }

export default MmInfo;
import React, { useRef } from 'react';
import MmInfo from '../components/MmInfo';
import MmInfor from "../components/MmInfo"
import "../css/Intro.css"

class IntroContainer extends React.Component {
  
  constructor() {
    super();
    this.mainDiv = React.createRef();
  }

  

  handleClick = e => {
    this.setState({skipHello: true});
    console.log('click ', this.state.skipHello);
  };

  componentDidMount() {
    window.scrollTo({
        top: this.mainDiv.current.offsetTop,
        behavior: "smooth"
      });
    setTimeout(() => {
        this.props.removeHelloDiv();
      }, 500);
    
  }

  render() {
    console.log(this.state)
    return (
        <div className="introCont" ref={this.mainDiv}>
          <MmInfo/>
        </div>
            
            
    );
  }
}

export default IntroContainer;
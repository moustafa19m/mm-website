import React, { useRef } from 'react';
import HelloWorld from '../components/HelloWorld'
import IntroContainer from '../containers/IntroContainer'
import "../css/HelloWorld.css"

class MainView extends React.Component {
  
  constructor() {
    super();
    this.postHello = React.createRef();
    this.state = {
      skipHello: false,
      removeHello: false
    };
  }

  

  handleClick = e => {
    this.setState({skipHello: true});
    console.log('click ', this.state.skipHello);
  };

  removeHelloDiv =() => {
    this.setState({removeHello: true});
  }



  render() {
    console.log(this.state)
    return (
        <div className="mainView">
            {
              this.state.removeHello ?
              <div></div>
              :
              <HelloWorld scrollDown={this.handleClick}/>
            }
            
            {
              this.state.skipHello?
              <IntroContainer removeHelloDiv={this.removeHelloDiv}/>
              :
              <div></div>
            }

            
            {this.props.children}
        </div>
    );
  }
}

export default MainView;
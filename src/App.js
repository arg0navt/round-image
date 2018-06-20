import React from 'react';
import RoundImage from 'components/round-image';
import img from "./DfhZxS.jpg"

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      color: null
    }
  }
  componentDidMount(){
    if(this.img) {
      const n = RoundImage.init(this.img, (color) => this.setState({color}));
    }
  }
  render() {
    return (
      <div className="App" style={this.state.color ? {background: `rgb(${this.state.color})`} : {}}>
        <img
          width={200}
          src={img}
          ref={(img) => this.img = img}
        />
      </div>
    );
  }
}

export default App;

import React from 'react';
import RoundImage from 'components/round-image';
import img from "./eiffel-tower-paris-france-eyfeleva-bashnya-ytky.jpg"

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
          width={1000}
          src={img}
          ref={(img) => this.img = img}
        />
      </div>
    );
  }
}

export default App;

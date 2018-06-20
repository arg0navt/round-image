import React from 'react';
import RoundImage from 'components/round-image';
import img from "./96387_1280_1024.jpg"

class App extends React.Component {
  componentDidMount(){
    if(this.img) RoundImage.init(this.img)
  }
  render() {
    return (
      <div className="App">
        <img
          src={img}
          ref={(img) => this.img = img}
        />
      </div>
    );
  }
}

export default App;

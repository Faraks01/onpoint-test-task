import React, { Component } from 'react'
import Slider from './components/slider/Slider'

class App extends Component {
  render() {
    return (
		<Slider duration={0.7} cubicBezier="cubic-bezier(0.47, 0, 0.745, 0.715)"/>
    );
  }
}

export default App;

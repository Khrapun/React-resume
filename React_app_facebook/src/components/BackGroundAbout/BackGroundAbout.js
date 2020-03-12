import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three'
import NET from 'vanta/dist/vanta.net.min';
import './BackGroundAbout.css';

class BackGroundAbout extends React.Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }
  componentDidMount() {
    this.vantaEffect = NET({
      el: this.vantaRef.current,
      color: 0x772eb,
      backgroundColor: 0x141414
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }
  render() {
    return <div className="about__bg" ref={this.vantaRef}></div>
  }
}

export default BackGroundAbout;
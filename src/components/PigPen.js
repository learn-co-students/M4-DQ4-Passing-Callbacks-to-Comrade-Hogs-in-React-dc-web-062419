import React from "react";
import Pig from "./Pig.js";
import GalaxySNote7 from "./GalaxySNote7.js";
import exclaim from "../assets/exclaim.mp3";

const pigs = ["Sobriety", "Trouble", "Cherub", "MasterBlaster"];

export default class PigPen extends React.Component {
  constructor() {
    super();
    this.state = {
      environment: "docile"
    };
    this.audio = new Audio(exclaim);
  }

  relax = () => {
    const newState = { environment: "docile" };
    // SETTIMEOUT ONLY ACCEPTS FUNCTION OBJECTS, SO MAKE ARROW FUNCTIONS
    setTimeout(() => {
      this.setState(newState);
    }, 2000);
  };

  alterEnvironment = vibe => {
    // SETTIMEOUT ONLY ACCEPTS FUNCTION OBJECTS, SO MAKE ARROW FUNCTIONS
    setTimeout(() => {
      if (vibe === "inhospitable") {
        this.audio.play();
        this.setState({ environment: vibe }, this.relax);
      }
    }, 500);
  };

  generateSheeple = () => {
    return pigs.map((name, idx) => (
      <Pig
        key={idx}
        id={name}
        name={name}
        environment={this.state.environment}
      />
    ));
  };

  render() {
    const sheeple = this.generateSheeple();
    return (
      <div id="pig-pen">
        {sheeple}
        <GalaxySNote7 alterEnvironment={this.alterEnvironment} />
      </div>
    );
  }
}

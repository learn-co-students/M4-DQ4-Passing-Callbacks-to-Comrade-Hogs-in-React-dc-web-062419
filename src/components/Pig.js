import React from "react"
import exclamation from "../assets/exclamation.png"

export default class Pig extends React.Component {


  panic = () => {
    if (this.props.environment==="inhospitable") {
      return <img className="exclamation" src={exclamation} alt="" />
    }
  }

  render() {
    return(
      <div id={this.props.name} className="sheeple">
        {this.panic()}
      </div>
    )
  }
}

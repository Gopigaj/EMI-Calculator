import React from "react";
import "rc-slider/assets/index.css";
import Slider, { createSliderWithTooltip } from "rc-slider";

class LoanAmount extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loanValue: 500,
      min: 500,
      max: 5000
    };

    this.onSliderChange = this.onSliderChange.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
    this.onSliderAfterChange = this.onSliderAfterChange.bind(this);
  }

  onSliderAfterChange(value) {
    console.log(value);
    this.props.onAmountChange(this.state.loanValue);
  }

  onValueChange(e) {
    this.setState({ loanValue: e.target.value });
  }

  onSliderChange(value) {
    this.setState({ loanValue: value });

    //console.log("comp", value);
  }

  render() {
    return (
      <div>
        LoanAmount:
        <input value={this.state.loanValue} onChange={this.onValueChange} />
        <Slider
          defaultValue={500}
          min={this.state.min}
          max={this.state.max}
          onChange={this.onSliderChange}
          onAfterChange={this.onSliderAfterChange}
        />
      </div>
    );
  }
}
export default LoanAmount;

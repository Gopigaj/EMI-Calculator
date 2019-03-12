import React from "react";
import "rc-slider/assets/index.css";
import Slider, { Range } from "rc-slider";

class LoanDuration extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      durationValue: 6,
      min: 6,
      max: 24
    };

    this.onSliderChange = this.onSliderChange.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
    this.onSliderAfterChange = this.onSliderAfterChange.bind(this);
  }

  onSliderChange(value) {
    this.setState({ durationValue: value });
  }

  onValueChange(e) {
    this.setState({ durationValue: e.target.value });
  }

  onSliderAfterChange(value) {
    this.props.onDurationChange(this.state.durationValue);
  }

  render() {
    return (
      <div>
        <label>LoanDuration:</label>
        <input value={this.state.durationValue} onChange={this.onValueChange} />
        <Slider
          defaultValue={6}
          min={this.state.min}
          max={this.state.max}
          onChange={this.onSliderChange}
          onAfterChange={this.onSliderAfterChange}
        />
      </div>
    );
  }
}
export default LoanDuration;

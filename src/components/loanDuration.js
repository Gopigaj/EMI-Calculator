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
      <div className="p-4">
        <div className="row mx-auto">
          <label className="col-md-4 col-form-label ">Loan Duration:</label>
          <input
            value={this.state.durationValue}
            onChange={this.onValueChange}
            className="col-md-5 form-control shadow mb-5 bg-white rounded"
          />
        </div>
        <div className="mx-auto p-4 col-md-8">
          <Slider
            defaultValue={6}
            min={this.state.min}
            max={this.state.max}
            onChange={this.onSliderChange}
            onAfterChange={this.onSliderAfterChange}
          />
        </div>
      </div>
    );
  }
}
export default LoanDuration;

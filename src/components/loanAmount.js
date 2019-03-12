import React from "react";
import "rc-slider/assets/index.css";
import Slider from "rc-slider/lib/Slider";

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
    //console.log(value);
    this.props.onAmountChange(this.state.loanValue);
  }

  onValueChange(e) {
    this.setState({ loanValue: e.target.value });
  }

  onSliderChange(value) {
    this.setState({ loanValue: value });
  }

  render() {
    return (
      <div className="p-4">
        <div className="row mx-auto">
          <label className="col-md-4 col-form-label">Loan Amount:</label>
          <input
            value={this.state.loanValue}
            onChange={this.onValueChange}
            className="col-md-5 form-control shadow mb-5 bg-white rounded"
          />
        </div>
        <div className="mx-auto p-4 col-md-8 ">
          <Slider
            defaultValue={500}
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
export default LoanAmount;

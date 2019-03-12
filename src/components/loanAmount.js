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
      <div>
        <label>LoanAmount:</label>
        <input value={this.state.loanValue} onChange={this.onValueChange} />
        <div className="p-5 col-md-8">
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

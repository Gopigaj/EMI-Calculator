import React from "react";

class IntrestRate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Intrest Rate: {this.props.interestRate}</p>
        <p>Monthly Payment: {this.props.monthlyPayment}</p>
      </div>
    );
  }
}
export default IntrestRate;

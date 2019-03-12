import React from "react";
import ReactMinimalPieChart from "react-minimal-pie-chart";

class IntrestRate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monthlyPayment: 0,
      interestRate: 0
    };
  }

  render() {
    return (
      <div>
        <div className="row mx-auto">
          <p className="col-md-5">Intrest Rate: {this.props.interestRate}</p>
          <p className="col-md-4">
            Monthly Payment: {this.props.monthlyPayment}
          </p>
        </div>
        <ReactMinimalPieChart
          data={[
            {
              title: "principle paid: " + this.props.totalInterest,
              value: this.props.totalInterestPercent,
              color: "#8df48d"
            },
            {
              title: "Interest paid: " + this.props.loanAmount,
              value: this.props.totalPrinciplePercent,
              color: "#abe2fb"
            }
          ]}
          startAngle={180}
          lengthAngle={180}
          //animate
          style={{ height: "300px" }}
        />
      </div>
    );
  }
}
export default IntrestRate;

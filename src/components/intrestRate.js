import React from "react";
import PieChart from "react-minimal-pie-chart";

class IntrestRate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monthlyPayment: 0,
      interestRate: 0
    };

    //this.handleChange = this.handleChange.bind(this);
  }

  /*componentDidUpdate() {
    this.setState({
      monthlyPayment: this.props.monthlyPayment,
      interestRate: this.props.interestRate
    });
    console.log("handle change called");
  }*/
  render() {
    return (
      <div>
        <p>Intrest Rate: {this.props.interestRate}</p>
        <p>Monthly Payment: {this.props.monthlyPayment}</p>
        <PieChart
          data={[
            {
              title: "One",
              value: this.props.totalInterestPercent,
              color: "#E38627"
            },
            {
              title: "Two",
              value: this.props.totalPrinciplePercent,
              color: "#C13C37"
            }
          ]}
          style={{ padding: 0 }}
          radius={20}
          //label={true}
          //reveal={2}
          //ratio={1}
          //lengthAngle={-360}
          animate
        />
      </div>
    );
  }
}
export default IntrestRate;

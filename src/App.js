import React, { Component } from "react";
import "./App.css";
import LoanDuration from "./components/loanDuration";
import LoanAmount from "./components/loanAmount";
import IntrestRate from "./components/intrestRate";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lAmount: 500,
      lDuration: 6,
      interestRate: 6,
      monthlyPayment: 90,
      totalInterestPercent: 0,
      totalPrinciplePercent: 0
    };
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleDurationChange = this.handleDurationChange.bind(this);
  }

  handleAmountChange(amount) {
    // console.log("mn", amount);
    this.setState({ lAmount: amount }, () => {
      console.log(this.state.lAmount);
      this.getInterest(this.state.lAmount, this.state.lDuration);
    });
    //console.log(this.state.lAmount);
  }

  handleDurationChange(duration) {
    //console.log(duration);
    this.setState({ lDuration: duration }, () => {
      console.log(this.state.lDuration);
      this.getInterest(this.state.lAmount, this.state.lDuration);
    });
  }

  getInterest = async (lAmount, lDuration) => {
    // e.preventDefault();

    const api_call = await fetch(
      `https://ftl-frontend-test.herokuapp.com/interest?amount=${lAmount}&numMonths=${lDuration}`
    );
    const data = await api_call.json();
    this.setState({
      interestRate: data.interestRate,
      monthlyPayment: data.monthlyPayment.amount
    });
    let totalpayment = this.state.monthlyPayment * this.state.lDuration;

    let totalInterest = totalpayment - this.state.lAmount;

    let totalInterestP = (totalInterest / totalpayment) * 100;

    let principleP = (this.state.lAmount / totalpayment) * 100;

    this.setState({
      totalInterestPercent: totalInterestP,
      totalPrinciplePercent: principleP
    });

    console.log("Total Payment", totalpayment);
    console.log("pp", principleP);
    console.log("TIP", totalInterestP);
    console.log("TI", totalInterest);
    console.log(data);
    console.log(this.state.interestRate, this.state.monthlyPayment);
    console.log(
      "sPP",
      this.state.totalInterestPercent,
      "ipp",
      this.state.totalPrinciplePercent
    );
  };

  render() {
    return (
      <div className="container bg-light mx-auto shadow p-4 mb-4 bg-white m-5 pb-5 App">
        <LoanAmount onAmountChange={this.handleAmountChange} />
        <LoanDuration onDurationChange={this.handleDurationChange} />
        <IntrestRate
          interestRate={this.state.interestRate}
          monthlyPayment={this.state.monthlyPayment}
          totalInterestPercent={this.state.totalInterestPercent}
          totalPrinciplePercent={this.state.totalPrinciplePercent}
        />
      </div>
    );
  }
}

export default App;

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
      monthlyPayment: 90
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
    console.log(data);
    console.log(this.state.interestRate, this.state.monthlyPayment);
  };

  render() {
    return (
      <div className="App">
        <LoanAmount onAmountChange={this.handleAmountChange} />
        <LoanDuration onDurationChange={this.handleDurationChange} />
        <IntrestRate
          interestRate={this.state.interestRate}
          monthlyPayment={this.state.monthlyPayment}
        />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import ClearButton from './components/ClearButton';

class App extends Component{
  constructor(props){
    super(props);

    this.state={
      input: "",
      previousNumber: "",
      correntNumber: "",
      operator: ""

    };
  }

  addToInput= val => {
    this.setState({ input: this.state.input + val});
  };

  addDecimal = val => {
    // adicione apenas decimal se não houver um ponto decimal atual na área de entrada
    console.log("Add Decimal")
    if(this.state.input.indexOf(".") == -1){
      var entrada = this.state.input + val;
      this.setState({ input: entrada});
      console.log(entrada)
    } 
    
  };

  addZeroToInput= val => {
    // se this.state.input não estiver vazio, adicione zero
    if(this.state.input !== ""){
      this.setState({ input: this.state.input + val});

    }
  };

  clearInput= () =>{
    this.setState({ input: ""});
  };

  add= () =>{
    this.state.previousNumber = this.state.input;
    this.setState({input: ""});
    this.state.operator = "plus";
  };

  subtract= () =>{
    this.state.previousNumber = this.state.input;
    this.setState({input: ""});
    this.state.operator = "subtract";
  };

  multiply= () =>{
    this.state.previousNumber = this.state.input;
    this.setState({input: ""});
    this.state.operator = "multiply";
  };

  percent= () =>{
    this.state.previousNumber = this.state.input;
    this.setState({input: ""});
    this.state.operator = "percent";
  };

  divide= () =>{
    this.state.previousNumber = this.state.input;
    this.setState({input: ""});
    this.state.operator = "divide";
  };

  evaluate= () => {
    this.state.currentNumber = this.state.input;
    console.log(this.state.currentNumber, this.state.previousNumber)
    if(this.state.operator == "plus"){
      this.setState({
        input: parseFloat(this.state.previousNumber) + parseInt(this.state.currentNumber)
      });

    }else if(this.state.operator == "subtract"){
      this.setState({
        input: parseFloat(this.state.previousNumber) - parseInt(this.state.currentNumber)
      });

    }else if(this.state.operator == "multiply"){
      this.setState({
        input: parseFloat(this.state.previousNumber) * parseInt(this.state.currentNumber)
      });

    }else if(this.state.operator == "divide"){
      this.setState({
        input: parseFloat(this.state.previousNumber) / parseInt(this.state.currentNumber)
      });

    }else if(this.state.operator == "percent"){
      this.setState({
        input: parseFloat(this.state.currentNumber) * (parseInt(this.state.previousNumber)/100)
      });

    }
  };

  render(){
    return (
      <div className="App">
        <div className="calc-wrapper" > 
          <div className="row">
            <Input>{this.state.input}</Input>
          </div>
        {/* Definindo Butão*/}
  
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.divide}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.multiply}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.add}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addDecimal}>.</Button>
            <Button handleClick={this.addZeroToInput}>0</Button>
            <Button handleClick={this.evaluate}>=</Button>
            <Button handleClick={this.subtract}>-</Button>
            
          </div>
          <div className="row">
            <ClearButton handleClear={this.clearInput}>Clear</ClearButton>
            <ClearButton handleClear={this.percent}>%</ClearButton>

          </div>
  
        </div>
  
      </div>
    );

  }
}

export default App;

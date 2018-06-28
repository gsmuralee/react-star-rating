import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class AddColorForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    debugger;
  }
  
  submit(e){
    const {_title, _color} = this.refs
    e.preventDefault();
    this.props.onNewColor(_title.value, _color.value);
    _title.value = "";
    _color.value = '#000000';
    _title.focus();
  }
  render(){
    return (
      <form onSubmit={this.submit}>
        <input ref="_title" type="text" placeholder="title color ..." required/>
        <input ref="_color" type="color"  required/>
        <button> Add </button>
        </form>
    )
  }
}

export default AddColorForm;

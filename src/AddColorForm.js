import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const AddColorForm = ({onNewColor=f=>f}) => {
    const submit =(e) => {
        let _title, _color;
        e.preventDefault();
        onNewColor(_title.value, _color.value);
        _title.value = "";
        _color.value = '#000000';
        _title.focus();
    }
    return (
        <form onSubmit={submit}>
        <input ref={input => _title = input} type="text" placeholder="title color ..." required/>
        <input ref={input => _color = input} type="color"  required/>
        <button> Add </button>
        </form>
    )
        
}

export default AddColorForm;

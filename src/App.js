
import './App.css';
import Header from './Header/Header';
import Font from './Font/Font';
import Typography from './Typography/Typography';

import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h1 className='FontFamily'>Font family</h1>
        <Font />
        <h1 className='Typography'>Typography</h1>
        <Typography />
      </div>
    )
  }
}


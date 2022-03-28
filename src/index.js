import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import InterestingFacts from './Containers/InterestingFacts';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

//<a href="https://www.freepik.com/vectors/background">Background vector created by freepik - www.freepik.com</a>

ReactDOM.render(
  <React.StrictMode>
    <InterestingFacts />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React, { Fragment } from 'react';
import './SeoChecker.css';

const SeoChecker = () => {
  return (
    <Fragment>
      <header>
        <h1>
          <a href="/">
            <span>S</span>
            <span>E</span>
            <span>O</span>
            <span> </span>
            <span>C</span>
            <span>H</span>
            <span>E</span>
            <span>C</span>
            <span>K</span>
            <span>E</span>
            <span>R</span>
          </a>
        </h1>
      </header>
      <div className="input-box">
        <form className="SeoForm">
          <input placeholder="Enter URL" />
          <button>GO</button>
        </form>
      </div>
      <div id="delay1">ss</div>
    </Fragment>
  );
};

export default SeoChecker;

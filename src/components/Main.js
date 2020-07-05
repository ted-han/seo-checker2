import React, { Fragment, useState } from 'react';
import './Main.css';
import Result from './Result';

const Main = () => {
  const [result, setResult] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setResult(!result);
  };

  console.log(result);
  return (
    <Fragment>
      <header className={result ? 'done' : 'ready'}>
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
        <form className="SeoForm" onSubmit={handleSubmit}>
          <input placeholder="Enter URL" />
          <button>GO</button>
        </form>
      </div>

      {result ? <Result resData={'resData'} /> : ''}
    </Fragment>
  );
};

export default Main;

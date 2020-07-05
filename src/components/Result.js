import React from 'react';
import './Result.css';

let data = {
  topData: [
    { name: 'H1', one: 10, total: 10, desc: 'pages' },
    { name: 'Open Graph', one: 9, total: 10, desc: 'pages' },
    { name: 'Meta Description', one: 8, total: 10, desc: 'pages' },
    { name: 'Canonical Tag', one: 10, total: 10, desc: 'pages' },
    { name: 'Broken Link', one: 3, total: 50, desc: 'links' },
    { name: 'Loading Time', one: 0, total: 1.2, desc: 'sec' },
    { name: 'Title', one: 0, total: 3, desc: 'duplication' },
  ],
  bottomData: [
    {
      url: '/',
      h1: true,
      og: true,
      meta: false,
      cano: false,
      broken: '1/3',
      loading: 1.42,
      title: 'seo checker',
    },
    {
      url: '/about',
      h1: true,
      og: false,
      meta: false,
      cano: true,
      broken: '0/4',
      loading: 3.42,
      title: 'seo checker simple',
    },
    {
      url: '/about',
      h1: true,
      og: false,
      meta: false,
      cano: true,
      broken: '0/4',
      loading: 3.42,
      title: 'seo checker simple',
    },
    {
      url: '/about',
      h1: true,
      og: false,
      meta: false,
      cano: true,
      broken: '0/4',
      loading: 3.42,
      title: 'seo checker simple',
    },
    {
      url: '/about',
      h1: true,
      og: false,
      meta: false,
      cano: true,
      broken: '0/4',
      loading: 3.42,
      title: 'seo checker simple',
    },
  ],
};

const ResultTop = () => {
  return (
    <div className="ResultTop">
      {data.topData.map((value, idx) => (
        <div className="head" key={idx}>
          <div className="name">{value.name}</div>
          <div>
            {value.one === 0 ? `${value.total}` : `${value.one}/${value.total}`}
            <span className="desc"> {value.desc}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

const ResultBottom = () => {
  return (
    <div className="ResultBottom">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>H1</th>
            <th>OG</th>
            <th>Meta Desc</th>
            <th>Canonical Tag</th>
            <th>Broken Links</th>
            <th>Loading Time</th>
            <th>Title</th>
          </tr>
        </thead>

        <tbody>
          {data.bottomData.map((value, idx) => (
            <tr key={idx}>
              <td>{value.url}</td>
              <td className={value.h1 ? 'green' : 'red'}>
                {value.h1 ? 'o' : 'x'}
              </td>
              <td className={value.og ? 'green' : 'red'}>
                {value.og ? 'o' : 'x'}
              </td>
              <td className={value.meta ? 'green' : 'red'}>
                {value.meta ? 'o' : 'x'}
              </td>
              <td className={value.cano ? 'green' : 'red'}>
                {value.cano ? 'o' : 'x'}
              </td>
              <td
                className={value.broken.substr(0, 1) === '0' ? 'green' : 'red'}
              >
                {value.broken}
              </td>
              <td className={parseInt(value.loading) < 3 ? 'green' : 'red'}>
                {value.loading} s
              </td>
              <td>{value.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Result = ({ resData }) => {
  console.log(resData);
  return (
    <div className="Result">
      <ResultTop />
      <ResultBottom />
    </div>
  );
};

export default Result;

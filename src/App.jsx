/* eslint-disable no-template-curly-in-string */
import React, { Component } from 'react';
import './App.scss';
import { sites } from './sites';
import { GoMarkGithub } from "react-icons/go";
import { FaLink } from "react-icons/fa";

class App extends Component {
  render() {
    return (
      <div className="main">
        <div className="container">
          <div className="container__title">
            <span className="container__span">Anastasiia Olashyn</span>
            <span className="container__span">Junior front-end developer</span>
          </div>
          <div className="sites">
            {sites.map((item) => (
              <div className="sites__block" key = {item.name}>

                <div className="sites__title">
                  <span>{item.name}</span>
                  <div className="sites__links">
                    <a href={item.webPage}><FaLink color='lightcoral' /></a>
                    <a href={item.github}><GoMarkGithub color='lightcoral' /></a>
                  </div>
                </div>
                <p className="sites__description">
                  {item.description}
                </p>
                <div className="sites__technologies">
                  {item.technologies.map((techology) => (
                    <span className="sites__techno" key = {techology}>{techology}. </span>
                  ))}
                </div>
              </div>

            ))}
          </div>
        </div>
      </div>


    );
  }
}

export default App;

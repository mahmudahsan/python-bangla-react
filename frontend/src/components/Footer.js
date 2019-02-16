/**
 * @author Mahmud Ahsan <https://github.com/mahmudahsan>
 */

import React from 'react';
import Config from '../config/Settings';

export default (props) => {
  return (
    <footer className="blog-footer">
      <div className="row">
          <div className="col-sm-4">
              <p><span role="img" aria-label="power by">🔥</span> Powered By <br />
                  <a href="https://reactjs.org/" target="_blank" rel="noreferrer noopener">React</a> | <a href="https://firebase.google.com/" target="_blank" rel="noreferrer noopener">Firebase</a> | <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer noopener">Bootstrap</a>

              </p>
          </div>
          <div className="col-sm-4">
              <p>
              <span role="img" aria-label="developed by">💻</span> Developed by <a href={Config.social.twitter} target="_blank" rel="noreferrer noopener">{Config.author.name}</a>
                  <br /> © {new Date().getFullYear()} <a href={Config.social.twitter} target="_blank" rel="noreferrer noopener">{Config.author.name}</a>
              </p>
          </div>
          <div className="col-sm-4">
              <p>
                  <a href="https://github.com/mahmudahsan/python-bangla-react" target="_blank" rel="noreferrer noopener"><span role="img" aria-label="github">🧐</span>Github Source</a> <br />
                  <a href="https://github.com/mahmudahsan/pythonbangla.com" target="_blank" rel="noreferrer noopener"><span role="img" aria-label="github">🤔</span>Original Django Source </a>
              </p>
          </div>
      </div>
    </footer>
  );
};
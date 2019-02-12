/**
 * @author Mahmud Ahsan <https://github.com/mahmudahsan>
 */

 import React from 'react';
import Config from '../config/Settings';

export default (props) => {
  return (
  <header className="blog-header py-3">
    <div className="row flex-nowrap justify-content-between align-items-center">
      <div className="col-4 text-center">
        <a className="blog-header-logo text-dark" href="/">
          <img src="/images/python-logo.png" alt={Config.logoAlt} height="80" />
        </a>
      </div>
    </div>
  </header>
  );
};
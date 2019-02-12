/**
 * @author Mahmud Ahsan <https://github.com/mahmudahsan>
 */

import React from 'react';
import Config from '../config/Settings';

export default (props) => {
  return (
    <div>
      <div className="nav-scroller py-1 mb-2">
        <div className="float-left">
          <nav className="nav">
            {Object.keys(Config.menu).map((key)=> {
              return (
                <a className="p-2 text-muted" href={Config.menu[key][1]}>{Config.menu[key][0]}</a>
              );
            })}
          </nav>
        </div>
        <div>
          <nav className="nav justify-content-end">
            {Object.keys(Config.social).map((key)=>{
              const iconUrl = "/images/social/icon-" + key + ".png";
              return (
                <a className="p-2 text-muted" href={Config.social[key]} target="_blank" rel="noopener noreferrer">
                <img src={iconUrl}  alt="{}" height="30" />
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
};
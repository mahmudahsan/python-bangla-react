/**
 * @author Mahmud Ahsan <https://github.com/mahmudahsan>
 */

import React from 'react';
//import Config from '../config/Settings';

export default class Youtube extends React.Component {

  render(){
    return (
      <div id="youtube-container" className="col-8">
        <div className="tab-content" id="nav-tabContent">
          <div className="tab-pane fade active show" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
            <div className="videoWrapper">
              <iframe title="python bangla" id="youtube-player-ID" type="text/html" width="560" height="315" src="https://www.youtube.com/embed/qcRlYt28WPM" frameborder="0" allowfullscreen></iframe>
            </div>
          <div className="mb-3"></div>
          <div id="youtube-description" className="youtube-description">
            <pre >DESCRIPTION</pre>
          </div>
        </div>
      </div>
    </div>
    );
  }
};

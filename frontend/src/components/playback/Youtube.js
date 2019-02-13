/**
 * @author Mahmud Ahsan <https://github.com/mahmudahsan>
 */

import React from 'react';
//import Config from '../config/Settings';

const Youtube = props => {
  const activeVideo = props.activevideo;
    
  return (
    <div id="youtube-container" className="col-8">
      <div className="tab-content" id="nav-tabContent">
        <div className="tab-pane fade active show" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
          <div className="videoWrapper">
            <iframe title="python bangla" id="youtube-player-ID" type="text/html" width="560" height="315" src={"https://www.youtube.com/embed/"+activeVideo.youtube} frameBorder="0" allowFullScreen></iframe>
          </div>
          <div className="mb-3"></div>
          <div id="youtube-description" className="youtube-description">
            <pre style={{whiteSpace: 'pre-wrap'}}>{activeVideo.description}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Youtube;

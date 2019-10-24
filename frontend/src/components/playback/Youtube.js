/**
 * @author Mahmud Ahsan <https://github.com/mahmudahsan>
 */

import React from 'react';
import Linkify from 'react-linkify'
import Config from '../../config/Settings';

const Youtube = props => {
  const activeVideo = props.activevideo;
    
  return (
    <div id="youtube-container" className="col-8">
      <div className="tab-content" id="nav-tabContent">
        <div className="tab-pane fade active show" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
          {activeVideo && activeVideo.youtube !== '' && (
            <div className="videoWrapper">
              <iframe title={Config.logoAlt} id="youtube-player-ID" type="text/html" width="560" height="315" src={"https://www.youtube.com/embed/"+activeVideo.youtube} frameBorder="0" allowFullScreen></iframe>
            </div>
          )}
          <div className="mb-3"></div>
          <div id="youtube-description" className="youtube-description">
            <pre style={{whiteSpace: 'pre-wrap'}}><Linkify>{activeVideo.description}</Linkify></pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Youtube;

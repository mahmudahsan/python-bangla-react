/**
 * @author Mahmud Ahsan <https://github.com/mahmudahsan>
 */

import React from 'react';
import Playlist from './Playlist';
import Youtube from './Youtube';
//import Config from '../config/Settings';

export default class Playback extends React.Component {

  render(){
    return (
      <div className="tab-content" id="myTabContent">
      <div className="card">
        <div className="card-body">
        <div class="row">
          <Playlist />
          <Youtube />
          </div>
        </div>
      </div>
      </div>
    );
  }
};

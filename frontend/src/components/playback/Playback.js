/**
 * @author Mahmud Ahsan <https://github.com/mahmudahsan>
 */

import React from 'react';
import Playlist from './Playlist';
import Youtube from './Youtube';
import Config, {PlayList} from '../../config/Settings';

export default class Playback extends React.Component {
  getPlayList = () => {
    switch(this.props.topic){
      case Config.menu.python_advanced[1]:
        return PlayList.advanced;
      default:
        return PlayList.beginner;
    }
  }

  render(){
    const playlist = this.getPlayList();
    const firstvideo = playlist.length > 0 ? playlist[0] : undefined;
    
    return (
      <div className="tab-content" id="myTabContent">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <Playlist playlist={playlist} />
              <Youtube firstvideo={firstvideo} />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

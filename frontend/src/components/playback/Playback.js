/**
 * @author Mahmud Ahsan <https://github.com/mahmudahsan>
 */

import React from 'react';
import Playlist from './Playlist';
import Youtube from './Youtube';
import Config, {PlayList} from '../../config/Settings';

export default class Playback extends React.Component {
  constructor(props){
    super(props);
    
    this.playlist = this.getPlayList();
    this.firstvideo = this.playlist.length > 0 ? this.playlist[0] : undefined;

    this.state = {
      activeVideo: this.firstvideo
    }
  }

  getPlayList = () => {
    switch(this.props.topic){
      case Config.menu.python_advanced[1]:
        return PlayList.advanced;
      default:
        return PlayList.beginner;
    }
  }

  setActiveVideoId = (videoId) => {
    console.log(videoId);
  }

  componentDidUpdate(prevProps){
    if (this.props.topic !== prevProps.topic) {
      this.playlist = this.getPlayList();
      this.firstvideo = this.playlist.length > 0 ? this.playlist[0] : undefined;

      this.setState({activeVideo: this.firstvideo});
    }
  }

  render(){
    return (
      <div className="tab-content" id="myTabContent">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <Playlist playlist={this.playlist} />
              <Youtube activevideo={this.state.activeVideo} />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

/**
 * @author Mahmud Ahsan <https://github.com/mahmudahsan>
 */

import React from 'react';
import Playlist from './Playlist';
import Youtube from './Youtube';
import Config from '../../config/Settings';
import getPlayList from '../../Model/Model';

export default class Playback extends React.Component {
  constructor(props){
    super(props);
    this.state = { activeVideo: undefined }
    
    this.getPlayList().then(data => {
      this.playlist = data;
      this.firstvideo = this.playlist.length > 0 ? this.playlist[0] : undefined;

      this.setState({activeVideo: this.firstvideo});
    });
  }

  getPlayList = () => {
    return new Promise((resolve, reject) => {
      switch(this.props.topic){
        case Config.menu.menu2[1]: 
          //advanced
          getPlayList(Config.menu.menu2[2]).then(data => {
            resolve(data);
          });
          break;
        case Config.menu.menu3[1]: 
          //django
          getPlayList(Config.menu.menu3[2]).then(data => {
            resolve(data);
          });
          break;
        case Config.menu.menu4[1]: 
          //html
          getPlayList(Config.menu.menu4[2]).then(data => {
            resolve(data);
          });
          break;
        case Config.menu.menu5[1]: 
          //english
          getPlayList(Config.menu.menu5[2]).then(data => {
            resolve(data);
          });
          break;
        default:
          // beginner
          getPlayList(Config.menu.menu1[2]).then(data => {
            resolve(data);
          });
      }
    });
  };

  setActiveVideo = (video) => {
    this.setState({activeVideo: video});
  }

  componentDidUpdate(prevProps){
    if (this.props.topic !== prevProps.topic) {
      this.getPlayList().then(data => {
        this.playlist = data;
        this.firstvideo = this.playlist.length > 0 ? this.playlist[0] : undefined;
  
        this.setState({activeVideo: this.firstvideo});
      });
    }
  }

  render(){
    return (
      <div className="tab-content" id="myTabContent">
        <div className="card">
          <div className="card-body">
            <div className="row">
            {this.playlist !== undefined && <Playlist playlist={this.playlist} setActiveVideo={this.setActiveVideo} /> }
            
            {this.state.activeVideo !== undefined && <Youtube activevideo={this.state.activeVideo} /> }
            </div>
          </div>
        </div>
      </div>
    );
  }
};

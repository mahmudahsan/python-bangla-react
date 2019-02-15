/**
 * @author Mahmud Ahsan <https://github.com/mahmudahsan>
 */

import React from 'react';
//import Config from '../config/Settings';

export default class Playlist extends React.Component {
  state = {
    selectedItemIndex: 0
  }

  changeVideo = (event, item, index) => {
    event.preventDefault();
    this.props.setActiveVideo(item);
    event.target.classList.add('active');
    this.setState({selectedItemIndex: index});
  }

  componentDidUpdate(prevProps){
    if (this.props.playlist !== prevProps.playlist) {
      this.setState({selectedItemIndex: 0});
    }
  }

  render(){
    return (
      <div className="col-4">
        <div className="list-group" id="list-tab" role="tablist">
          {this.props.playlist.map( (item, key) => {
            return (
              <a className={"list-group-item list-group-item-action " + (key === this.state.selectedItemIndex ? "active" : "")} id="list-home-list" data-toggle="tab" href={item.youtube} key={item.youtube}  role="tab" aria-controls="list-home" aria-selected="true" onClick={(e) => this.changeVideo(e, item, key)}>{item.title}</a>
            );
          })}
        </div>
      </div>
    );
  }
};


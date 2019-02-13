/**
 * @author Mahmud Ahsan <https://github.com/mahmudahsan>
 */

import React from 'react';
//import Config from '../config/Settings';

export default class Playlist extends React.Component {
  render(){
    return (
      <div className="col-4">
        <div className="list-group" id="list-tab" role="tablist">
          {this.props.playlist.map( (item, key) => {
            return (
              <a className={"list-group-item list-group-item-action " + (key === 0 ? "active" : "")} id="list-home-list" data-toggle="tab" href={item.youtube} role="tab" aria-controls="list-home" aria-selected="true">{item.title}</a>
            );
          })}
        </div>
      </div>
    );
  }
};

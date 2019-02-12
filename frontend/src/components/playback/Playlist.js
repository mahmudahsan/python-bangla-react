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
          <a className="list-group-item list-group-item-action active show" id="list-home-list" data-toggle="tab" href="VIDEO_ID" role="tab" aria-controls="list-home" aria-selected="true">১. পাইথন কি, কিভাবে পাইথন সেটআপ করতে হয়, কিভাবে কোড লিখে রান করতে হয়</a>
          <a className="list-group-item list-group-item-action" id="list-home-list" data-toggle="tab" href="VIDEO_ID" role="tab" aria-controls="list-home" aria-selected="true">2. পাইথন কি, কিভাবে পাইথন সেটআপ করতে হয়, কিভাবে কোড লিখে রান করতে হয়</a>
        </div>
      </div>
    );
  }
};

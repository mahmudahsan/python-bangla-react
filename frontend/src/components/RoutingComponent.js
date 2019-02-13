/**
 * @author Mahmud Ahsan <https://github.com/mahmudahsan>
 */

import React from 'react';
import Cards from './Cards';
import Playback from './playback/Playback';

const RoutingComponent = (props) => {
  return (
    <div>
      <Cards />
      <Playback topic={props.match.path} />
    </div>
  );
};

export default RoutingComponent;
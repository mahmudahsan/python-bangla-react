/**
 * @author Mahmud Ahsan <https://github.com/mahmudahsan>
 */

import React from 'react';
import Cards from './Cards';
import Playback from './playback/Playback';
import Footer from './Footer';

const RoutingComponent = (props) => {
  return (
    <div>
      <Cards />
      <div className="mb-2"></div>
      <Playback topic={props.match.path} />
      <Footer />
    </div>
  );
};

export default RoutingComponent;
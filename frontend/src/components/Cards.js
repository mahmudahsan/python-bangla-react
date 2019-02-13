/**
 * @author Mahmud Ahsan <https://github.com/mahmudahsan>
 */

import React from 'react';
import Config, {Cards} from '../config/Settings';

export default (props) => {
  return (
    <div className="row mb-2">
      {Cards.map((card)=>{
        const cardImage = Config.imageBaseUrl + "images/cards/" + card.image;
        return (
          <div className="col-md-6" key={card.title_english+card.title_other}>
            <div className="card flex-md-row mb-4 box-shadow h-md-250">
              <div className="card-body d-flex flex-column align-items-start">
                <strong className="d-inline-block mb-2 color-gray">{ card.title_english }</strong>
                <h3 className={"mb-0 " + card.title_other_css_class}>
                  { card.title_other }
                </h3>
                <div className="mb-2"></div>
                <p className="card-text mb-auto card-overflow">
                { card.short_desc }
                </p>
              </div>
              <img className="card-img-right flex-auto d-none d-lg-block" src={ cardImage } alt= { card.title_english } />
            </div>
          </div>
        );
      })}
    </div>
  );
};
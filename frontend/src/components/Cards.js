/**
 * @author Mahmud Ahsan <https://github.com/mahmudahsan>
 */

import React from 'react';
import Config, {Cards} from '../config/Settings';

export default (props) => {
  return (
    <div className="card-group">
      {Cards.map((card)=>{
        const cardImage = Config.imageBaseUrl + "images/cards/" + card.image;
        return (
          <div className="card" key={card.title_english+card.title_other}>
            <img className="card-img-top" src={ cardImage } alt={ card.title_english } />
            <div className="card-body">
              <h3 className={"mb-0 " + card.title_other_css_class}>
                  { card.title_other === '' ? card.title_english : card.title_other }
              </h3>
              <p className="card-text mb-auto card-overflow">
                { card.short_desc }
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
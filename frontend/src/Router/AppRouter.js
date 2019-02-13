/**
 * @author Mahmud Ahsan <https://github.com/mahmudahsan>
 */

import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import RoutingComponent from '../components/RoutingComponent';
import NotFoundPage from '../components/NotFoundPage';
import Config from '../config/Settings';

const AppRouter = () => {
  return (
    <div className="container">
      <Header />
      <BrowserRouter>
        <div>
          <div className="nav-scroller py-1 mb-2">
            <div className="float-left">
              <nav className="nav">
                {Object.keys(Config.menu).map((key)=> {
                  return (
                    <NavLink className="p-2 text-muted" to={Config.menu[key][1]}
                      activeStyle={{fontWeight: 'bold'}}
                    >{Config.menu[key][0]}</NavLink>
                  );
                })}
              </nav>
            </div>
            <div>
              <nav className="nav justify-content-end">
                {Object.keys(Config.social).map((key)=>{
                  const iconUrl = "/images/social/icon-" + key + ".png";
                  return (
                    <a className="p-2 text-muted" href={Config.social[key]} target="_blank" rel="noopener noreferrer">
                    <img src={iconUrl}  alt="{}" height="30" />
                    </a>
                  );
                })}
              </nav>
            </div>
          </div>

          <Switch>
            <Route path="/" component={RoutingComponent} exact={true} />
            <Route path="/advanced" component={RoutingComponent} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
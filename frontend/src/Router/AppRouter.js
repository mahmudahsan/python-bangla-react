/**
 * @author Mahmud Ahsan <https://github.com/mahmudahsan>
 */

import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import RoutingComponent from '../components/RoutingComponent';
import Footer from '../components/Footer';
import NotFoundPage from '../components/NotFoundPage';
import Config from '../config/Settings';

const AppRouter = () => {
  return (
    <div>
    <div className="container">
      <Header />
      <BrowserRouter>
        <div>
        <nav className="navbar navbar-light justify-content-between">
          <div className="nav">
            {Object.keys(Config.menu).map((key)=> {
              return (
                <span key={Config.menu[key][0]}>
                  { Config.menu[key][1] === 'ext' ? <a className="p-2 text-muted" href={Config.menu[key][2]} target="_blank" rel="noopener noreferrer">{Config.menu[key][0]}</a> : <NavLink className="p-2 text-muted" to={Config.menu[key][1]}
                  activeClassName="nav-active"
                  exact
                >{Config.menu[key][0]}</NavLink>}
                </span>
              );
            })}
          </div>
          <div className="nav">
          {Object.keys(Config.social).map((key)=>{
            const iconUrl = "/images/social/icon-" + key + ".png";
            return (
              <a className="p-2 text-muted" href={Config.social[key]} key={Config.social[key]} target="_blank" rel="noopener noreferrer">
              <img src={iconUrl}  alt="{}" height="30" />
              </a>
            );
          })}
          </div>
        </nav>

          <Switch>
            <Route path={Config.menu.menu1[1]} component={RoutingComponent} exact />
            <Route path={Config.menu.menu2[1]} component={RoutingComponent} />
            <Route path={Config.menu.menu3[1]} component={RoutingComponent} />
            <Route path={Config.menu.menu4[1]} component={RoutingComponent} />
            <Route path={Config.menu.menu5[1]} component={RoutingComponent} />
            <Route path={Config.menu.menu6[1]} component={() => window.location='"'+Config.menu.menu6[2]+'"'} />
            <Route path={Config.menu.menu7[1]} component={RoutingComponent} />
            
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
    <div className="mb-4"></div>
    <Footer />
    </div>
  );
};

export default AppRouter;
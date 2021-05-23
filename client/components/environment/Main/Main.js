import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router';
import ReactNotification from 'react-notifications-component';
import { useDispatch } from 'react-redux';
import R from 'ramda';

import { attemptGetUser } from './../../../store/thunks/user';

import WelcomePage from './../../../pages/WelcomePage';
import LoginPage from './../../../pages/LoginPage';
import RegisterPage from './../../../pages/RegisterPage';
import HomePage from './../../../pages/HomePage';
import TopicPage from './../../../pages/TopicPage';
import SettingsPage from './../../../pages/SettingsPage';
import LostPage from './../../../pages/LostPage';

import Navigation from './../../Navigation';
import Footer from './../../Footer';

export default function Main({ location }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(attemptGetUser())
      .catch(R.identity)
      .then(() => setLoading(false));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return !loading && (
    <div>
      <ReactNotification />
      <Navigation pathname={location.pathname} />
      <div className="main">
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/topic" component={TopicPage} />
          <Route path="/settings" component={SettingsPage} />
          <Route path="*" component={LostPage} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

Main.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

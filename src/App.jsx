import { LinearProgress, Container } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import { bindActionCreators } from 'redux';
import * as userActions from './actions/user';
import { connect } from 'react-redux';

function App({ user, userActions }) {
  const [tab, setTab] = React.useState(0);

  const handleChangeTab = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <>
      <Header
        tab={tab}
        handleChangeTab={handleChangeTab}
        logout={userActions.logout}
        user={user}
      />

      <Sidebar />

      <Hero tab={tab} maxWidth="sm" />
    </>
  );
}

function mapStateToProps() {
  const mapStateToProps = (state) => {
    return {
      user: state.user,
    };
  };
  return mapStateToProps;
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

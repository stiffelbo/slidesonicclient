import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";

//Redux
import { connect } from 'react-redux';
import { setRwdMode, getRwd } from "./store/rwdRedux";
import { loadCollectionsRequest } from "./store/collectionsRedux";


//Comp
import MainLayout from "./components/layout/mainLayout";

//pages
import {Dashboard} from './pages/dashboard/dashboard';
import Player from './pages/player/player';

class App extends Component {

  state = {
    user : null,
  }


  componentDidMount(){
    const {setRwd, loadCollections} = this.props;
    //RWD
    const height = window.innerHeight;
    const width = window.innerWidth;
    setRwd({height, width});
    window.addEventListener('resize', e => {
      this.handleResize(e);
    });

    loadCollections();
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = e => {
    const {setRwd} = this.props;
    const height = e.target.window.innerHeight;
    const width = e.target.window.innerWidth;
    setRwd({height, width});
  }

  render() {
    return (
      <MainLayout rwd={this.props.rwd}>
        <ToastContainer></ToastContainer>
        <Switch location={window.location}>
          <Route path="/player" component={Player}/>
          <Route path="/" component={Dashboard}/>
        </Switch>
      </MainLayout>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setRwd : mode => dispatch(setRwdMode(mode)),
  loadCollections : ()=>dispatch(loadCollectionsRequest()),
});

const mapStateToProps = state => ({
  rwd : getRwd(state),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(App);

export {Container as  App};
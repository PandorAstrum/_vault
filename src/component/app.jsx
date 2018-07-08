// Descriptions ------------------------------------------------------
//
// Base React Component called by Render Process
// -------------------------------------------------------------------

// React Initialization 
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Material UI Initialization
import Button from '@material-ui/core/Button';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import lime from '@material-ui/core/colors/lime';

// Mongo Initialization 
// var mongoose = require('mongoose')
//    ,Schema = mongoose.Schema
//    ,ObjectId = Schema.ObjectId;

// mongoose.connect('mongodb://localhost/my_database',{useMongoClient:true});    
// import CssBaseline from 'material-ui/CssBaseline';
// import { withTheme } from 'material-ui/styles';
// import { withStyles } from 'material-ui/styles';
// import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
// import lime from 'material-ui/colors/lime';
// import {defaultTheme} from './vault-theme'
// import Titlebar from './components/titlebar'
// import MainContent from './components/maincontent'

// import css from './assets/css/app.css'

class App extends Component {

  // general context api from react

  // Get stored data if not found initialize default data
  // such as theme and others


  // Mounting 
  constructor(props){
    super(props);
    this.state = {
      message: "Okay"
    };
  }
  // invoke before render
  componentWillMount(){
    // try last session from local storage
  }
  // render Gui
  render() {

    // build theme from storage and settings
    const theme = createMuiTheme({
      palette: {
        type: 'dark',
        primary: lime,
      },
    });

    return (
      <MuiThemeProvider theme={theme}>
        <Button variant="outlined" color="primary">
          login
        </Button>
      </MuiThemeProvider>
    )
  }
  
  // // If you need to load data from a remote endpoint, this is a good place to instantiate the network request
  // componentDidMount(){
  //   // try auto login
  // }
  
  // getSnapshotBeforeUpdate(prevProps, prevState) {}
  // componentWillUpdate(){}
  // componentDidUpdate(prevProps, prevState, snapshot) {}
  
  // // necessary cleanup
  // componentWillUnMount(){}

  // componentDidUpdate(){}
}

export default withStyles()(App);




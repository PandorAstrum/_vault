import React, {Component} from 'react'
import PropTypes from 'prop-types'
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
    // const theme = createMuiTheme({
    //   palette: {
    //     type: 'dark',
    //     primary: lime,
    //   },
    // });

    const isLoggedIn = false;
  
    return (
        <h1>Hello from react</h1>
    //   <MuiThemeProvider theme={theme}>
    //   {/* <WithTheme /> */}
    //   <div className={css.root}>
    //     <CssBaseline />
    //     <Titlebar />
    //     <MainContent isLoggedIn={isLoggedIn}/>
    //   </div>
    //   </MuiThemeProvider>
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

// export default withStyles()(App);
export default App




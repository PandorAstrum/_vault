// Descriptions ------------------------------------------------------
//
// The Renderer Process that is called by main process
// Responsible to draw things 
// -------------------------------------------------------------------

import React from 'react'
import {render} from 'react-dom'
import App from './component/app.jsx'

render( <App/>, document.getElementById('root') )

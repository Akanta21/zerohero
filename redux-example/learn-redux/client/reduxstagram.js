// let's go!
//  if you dont .. or /, the package is from node_modules
import React from 'react'
import { render } from 'react-dom'

// import CSS
import css from './styles/style.styl'

//import Components
import App from './components/app'
import Single from './components/Single'
import PhotoGrid from './components/Photogrid'

//import react-router
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

//importing redux
import { Provider } from 'react-redux'

import store, { history } from './store'

//  setting up of error-tracking

import Raven from 'raven-js'

import { sentry_url, logException } from './error/config'

Raven.config(sentry_url).install()

// Raven.captureMessage('Something bad happened!')
// Raven.showReportDialog()

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:postId" component={Single}></Route>
            </Route>
        </Router>
    </Provider>

)

render(router, document.getElementById('root'))

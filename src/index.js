import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './scenes/Login'
import Search from './scenes/Search'

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter basename='/'>	
      <Switch>
        {['/', '/search'].map((path, index) => 
          <Route
            exact={true}
            path={path}
            key={index}
            component={Search} /> 
        )}
        <Route 
          exact={true} 
          path='/login' 
          component={Login} /> 
      </Switch>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'))
registerServiceWorker()

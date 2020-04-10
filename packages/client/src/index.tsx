import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import { Router } from 'react-router'
import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { RootStore } from './stores'
import App from './containers/App'
import './custom.scss'

const rootStore = new RootStore()

if (process.env.NODE_ENV === 'development') {
  console.log('Dev Mode')
}

ReactDOM.render(
  <Provider {...rootStore}>
    <Router history={rootStore.history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
)
